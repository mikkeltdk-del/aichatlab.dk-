import OpenAI from 'openai';
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Type definitions
interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface LeadData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

interface LeadCaptureJson {
  action: string;
  data: LeadData;
}

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { question, history = [] } = await request.json();

    const knowledgeBasePath = path.join(process.cwd(), 'knowledge_mase.md');
    const knowledgeBase = fs.readFileSync(knowledgeBasePath, 'utf-8');

    const systemPrompt = `Du er en naturlig og hjælpsom AI assistent for AI Chat Lab™ - Danmarks førende leverandør af skræddersyede AI chatbots.

${knowledgeBase}

## Navigation med Links
Når brugere beder om at se specifikke dele af hjemmesiden, brug dette link format i dine svar:

**Link format:**
[LINK: Portfolio | /portfolio]
[LINK: Services | /services]
[LINK: Kontakt | /contact]
[LINK: Om Os | /about]
[LINK: Forside | /]

**Tilgængelige sider:**
- **Forside (/)**: Introduktion til AI Chat Lab, hero section med demo knap, features oversigt
- **Portfolio (/portfolio)**: Case studies og tidligere projekter
- **Services (/services)**: Detaljeret oversigt over løsninger, priser og pakker
- **Kontakt (/contact)**: Kontaktformular og informationer
- **Om os (/about)**: Information om virksomheden og teamet

**Eksempler på svar med links:**
- "Jeg vil se jeres arbejde" → "Du kan se vores portfolio her: [LINK: Portfolio | /portfolio] 💼"
- "Hvad koster det?" → "Find alle priser her: [LINK: Services | /services] 🛠️"
- "Kontakt info?" → "Du kan kontakte os her: [LINK: Kontakt | /contact] 📞"
- "Fortæl om jer" → "Læs mere om os her: [LINK: Om Os | /about] ℹ️"

VIGTIGST: 
- Tal som en rigtig person - ikke som en salgsrobot
- Vær afslappet, venlig og autentisk
- Undgå marketing-sprog og salgs-pitches
- Lad samtalen flyde naturligt

🔥 LEAD CAPTURE FUNKTION:
Når en kunde ønsker kontakt, brug denne JSON struktur i dit svar:
{
  "action": "capture_lead",
  "data": {
    "name": "kundens navn",
    "email": "kunde@email.dk",
    "phone": "telefonnummer (valgfrit)",
    "company": "virksomhed (valgfrit)",
    "message": "hvad kunden har brug for"
  }
}

Spørg naturligt: "Hvad hedder du?" → "Og din email?" → "Telefonnummer?" (valgfrit)
Når du har navn + email, bekræft at du videregiver informationen til teamet.

Kommunikationsstil:
- Svar kort og præcist - undgå lange vendinger
- Brug hverdagssprog, ikke corporate-tale
- Stil modspørgsmål når du har brug for mere info
- Vær personlig men professionel

Når du giver prisestimater:
- Forklar klart at det er et estimat fra en demo-bot
- Henvis til sales team for bindende tilbud
- Vær transparent om hvad der kan påvirke prisen

Sprog:
- Svar på dansk som standard
- Skift sprog hvis kunden skriver på andet sprog
- Brug almindeligt dansk - ikke formelt eller stift

Produktlinks:
Hvis du nævner et specifikt produkt fra AI Chat Lab, brug dette format:
[PRODUKT: Produkt Navn | https://aichatlab.dk/url]

Undgå:
- Lange marketing-vendinger
- Overdreven entusiasme (!!!, 🎉 overalt)
- Kunstigt salgs-sprog
- At lyde som en reklame
- At love du kan sende beskeder eller kontakte folk`;

    // Build messages array for OpenAI
    const messages: ChatMessage[] = [
      {
        role: 'system',
        content: systemPrompt
      },
      ...history.map((msg: ChatMessage) => ({
        role: msg.role,
        content: msg.content
      })),
      {
        role: 'user',
        content: question
      }
    ];

    const response = await client.chat.completions.create({
      model: 'gpt-4o',
      messages: messages,
      temperature: 0.7,
      max_tokens: 2048,
    });

    const assistantMessage = response.choices[0].message.content || 'Beklager, jeg kunne ikke generere et svar.';

    // Check for lead capture JSON
    let leadCaptured = false;
    const jsonMatch = assistantMessage.match(/\{[\s\S]*?"action"\s*:\s*"capture_lead"[\s\S]*?\}/);
    
    if (jsonMatch) {
      try {
        const leadJson: LeadCaptureJson = JSON.parse(jsonMatch[0]);
        if (leadJson.action === 'capture_lead' && leadJson.data) {
          // Send lead email
          const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
          await fetch(`${baseUrl}/api/send-lead`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(leadJson.data),
          });
          leadCaptured = true;
        }
      } catch (e) {
        console.error('Lead parse error:', e);
      }
    }

    // Remove JSON from response
    const cleanMessage = assistantMessage.replace(/\{[\s\S]*?"action"\s*:\s*"capture_lead"[\s\S]*?\}/, '').trim();

    return NextResponse.json({
      answer: cleanMessage || assistantMessage,
      leadCaptured,
    });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Der opstod en fejl. Prøv venligst igen.' },
      { status: 500 }
    );
  }
}