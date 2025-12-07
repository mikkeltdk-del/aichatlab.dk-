'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

interface ChatbotProps {
  isOpen?: boolean;
  onToggle?: () => void;
  showPulse?: boolean;
}

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const STORAGE_KEY = 'aichatlab_chat_history';

export default function Chatbot({ isOpen: externalIsOpen, onToggle, showPulse }: ChatbotProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = externalIsOpen ?? internalIsOpen;
  
  // Load messages from localStorage or use default
  const [messages, setMessages] = useState<Message[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error('Failed to parse chat history:', e);
        }
      }
    }
    return [{ sender: 'bot', text: 'Hej! Jeg er AI Chat Lab demo-bot 🤖. Hvad kan jeg hjælpe dig med?' }];
  });

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSending, setIsSending] = useState(false);
  
  // Contact form state
  const [isCollectingContact, setIsCollectingContact] = useState(false);
  const [contactStep, setContactStep] = useState<'name' | 'email' | 'phone' | 'message' | 'done'>('name');
  const [contactData, setContactData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    }
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalIsOpen(!internalIsOpen);
    }
  };

  const clearHistory = () => {
    const confirmClear = window.confirm('Er du sikker på at du vil rydde chat historikken?');
    if (confirmClear) {
      const initialMessage = [{ sender: 'bot' as const, text: 'Hej! Jeg er AI Chat Lab demo-bot 🤖. Hvad kan jeg hjælpe dig med?' }];
      setMessages(initialMessage);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  const startContactCollection = () => {
    setIsCollectingContact(true);
    setContactStep('name');
    setContactData({ name: '', email: '', phone: '', message: '' });
    setMessages(prev => [...prev, { 
      sender: 'bot', 
      text: 'Perfekt! Lad mig få dine oplysninger, så Mikkel kan kontakte dig. 📝\n\nHvad er dit navn eller firmanavn?' 
    }]);
  };

  const handleContactInput = async (userInput: string) => {
    setMessages(prev => [...prev, { sender: 'user', text: userInput }]);

    switch (contactStep) {
      case 'name':
        setContactData(prev => ({ ...prev, name: userInput }));
        setContactStep('email');
        setMessages(prev => [...prev, { 
          sender: 'bot', 
          text: `Tak, ${userInput}! 👋\n\nHvad er din email adresse?` 
        }]);
        break;

      case 'email':
        if (!userInput.includes('@')) {
          setMessages(prev => [...prev, { 
            sender: 'bot', 
            text: 'Hmm, det ser ikke ud som en gyldig email. Prøv igen. 📧' 
          }]);
          return;
        }
        setContactData(prev => ({ ...prev, email: userInput }));
        setContactStep('phone');
        setMessages(prev => [...prev, { 
          sender: 'bot', 
          text: 'Super! 📧\n\nHvad er dit telefonnummer?' 
        }]);
        break;

      case 'phone':
        setContactData(prev => ({ ...prev, phone: userInput }));
        setContactStep('message');
        setMessages(prev => [...prev, { 
          sender: 'bot', 
          text: 'Perfekt! 📞\n\nVil du tilføje en besked til Mikkel? (Skriv "nej" for at springe over)' 
        }]);
        break;

      case 'message':
        const finalMessage = userInput.toLowerCase() === 'nej' ? '' : userInput;
        setContactData(prev => ({ ...prev, message: finalMessage }));
        
        setIsLoading(true);
        try {
          const response = await fetch('/api/send-contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: contactData.name,
              email: contactData.email,
              phone: contactData.phone,
              message: finalMessage
            })
          });

          if (response.ok) {
            setMessages(prev => [...prev, { 
              sender: 'bot', 
              text: '✅ Tak! Dine oplysninger er sendt til Mikkel.\n\nHan kontakter dig hurtigst muligt! 🚀' 
            }]);
          } else {
            throw new Error('Kunne ikke sende');
          }
        } catch (error) {
          console.error('Fejl ved afsendelse:', error);
          setMessages(prev => [...prev, { 
            sender: 'bot', 
            text: '❌ Der opstod en fejl. Prøv venligst igen eller kontakt os direkte på mikkelh@aichatlab.dk' 
          }]);
        } finally {
          setIsLoading(false);
          setIsCollectingContact(false);
          setContactStep('done');
        }
        break;
    }
  };

  const handleSend = async () => {
    if (input.trim() === '' || isLoading) return;
    
    setIsSending(true);
    setTimeout(() => setIsSending(false), 400);
    
    const userMessage = input.trim();
    setInput('');

    if (isCollectingContact) {
      handleContactInput(userMessage);
      return;
    }

    const contactKeywords = ['kontakt', 'ring', 'skriv', 'email', 'få fat', 'tale med', 'snakke med', 'tilbud', 'prisestimat'];
    if (contactKeywords.some(keyword => userMessage.toLowerCase().includes(keyword))) {
      setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);
      startContactCollection();
      return;
    }
    
    setMessages(prev => [...prev, { sender: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const history = messages.map(m => ({
        role: m.sender === 'user' ? 'user' : 'assistant',
        content: m.text
      }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          question: userMessage,
          history
        })
      });

      if (response.ok) {
        const data = await response.json();
        setMessages(prev => [...prev, { 
          sender: 'bot', 
          text: data.answer 
        }]);
      } else {
        throw new Error('Server fejl');
      }
    } catch (error) {
      console.error('API fejl:', error);
      setMessages(prev => [...prev, { 
        sender: 'bot', 
        text: 'Det ser ud til, at der opstod en fejl. Venligst kontakt support, eller prøv igen senere.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Parse links in bot messages: [LINK: Text | /url]
  const parseMessageWithLinks = (text: string) => {
    const linkRegex = /\[LINK:\s*([^\|]+?)\s*\|\s*([^\]]+?)\]/g;
    const parts: (string | { type: 'link'; text: string; url: string })[] = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index));
      }
      parts.push({
        type: 'link',
        text: match[1].trim(),
        url: match[2].trim()
      });
      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : [text];
  };

  return (
    <>
      {/* Floating Chat Button */}
       {!isOpen && (
        <button
          onClick={handleToggle}
          className="fixed bottom-6 right-6 z-50 group"
          aria-label="Åbn chat"
        >
          <div className="relative">
            <div className={`absolute inset-0 bg-black rounded-full blur-xl opacity-20 group-hover:opacity-35 transition-opacity duration-300 ${showPulse ? 'animate-pulse' : ''}`}></div>
            <div className={`relative w-20 h-20 bg-white rounded-full flex items-center justify-center border-2 border-[var(--border-color)] shadow-lg hover:scale-110 transition-transform duration-300 ${showPulse ? 'animate-pulse' : ''}`}>
              <Image 
                src="/new-logo.png" 
                alt="Chat" 
                width={50} 
                height={50}
                className="drop-shadow-sm"
              />
            </div>
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 z-50 w-[28rem] max-w-[calc(100vw-2rem)]">
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-[var(--text-secondary)]">
            
            {/* Header */}
            <div className="relative bg-white p-5 border-b-2 border-[var(--border-color)]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border-2 border-[var(--border-color)] shadow-sm">
                      <Image 
                        src="/new-logo.png" 
                        alt="Bot" 
                        width={24} 
                        height={24}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-[var(--text-primary)] text-base">
                      AI Chat Lab
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <p className="text-xs text-[var(--text-secondary)] font-semibold">Online</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <button 
                    onClick={clearHistory}
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm p-2"
                    title="Ryd historik"
                  >
                    🗑️
                  </button>
                  
                  <button 
                    onClick={handleToggle}
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-2xl leading-none hover:rotate-90 transition-transform duration-300"
                  >
                    ✕
                  </button>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-[28rem] overflow-y-auto p-5 space-y-4 bg-white custom-scrollbar">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
                >
                  {message.sender === 'bot' && (
                    <div className="mr-3 mt-1">
                      <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center border-2 border-[var(--border-color)] shadow-sm">
                        <Image 
                          src="/new-logo.png" 
                          alt="Bot" 
                          width={16} 
                          height={16}
                        />
                      </div>
                    </div>
                  )}
                  
                  <div
                    className={`max-w-[75%] p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-black text-white shadow-sm'
                        : 'bg-[var(--bg-secondary)] text-[var(--text-primary)] border-2 border-[var(--border-color)] shadow-sm'
                    }`}
                  >
                    {message.sender === 'bot' ? (
                      <div className="whitespace-pre-line text-[15px] leading-relaxed">
                        {parseMessageWithLinks(message.text).map((part, i) => {
                          if (typeof part === 'string') {
                            return <span key={i}>{part}</span>;
                          } else {
                            return (
                              <Link
                                key={i}
                                href={part.url}
                                onClick={handleToggle}
                                className="inline-flex items-center gap-1 text-black font-semibold underline hover:opacity-70 transition-opacity"
                              >
                                {part.text} →
                              </Link>
                            );
                          }
                        })}
                      </div>
                    ) : (
                      <div className="whitespace-pre-line text-[15px] leading-relaxed">{message.text}</div>
                    )}
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start animate-fadeIn">
                  <div className="mr-3 mt-1">
                    <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center border-2 border-[var(--border-color)] shadow-sm">
                      <Image 
                        src="/new-logo.png" 
                        alt="Bot" 
                        width={16} 
                        height={16}
                      />
                    </div>
                  </div>
                  <div className="bg-[var(--bg-secondary)] text-[var(--text-primary)] p-3 rounded-lg border-2 border-[var(--border-color)] shadow-sm">
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-black rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></div>
                      <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="relative p-4 border-t-2 border-[var(--border-color)] bg-white">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={isCollectingContact ? "Skriv dit svar..." : "Skriv din besked..."}
                  className="flex-1 bg-white text-[var(--text-primary)] border-2 border-[var(--border-color)] rounded-lg px-4 py-2 focus:outline-none focus:border-black focus:shadow-sm placeholder-[var(--text-light)] transition-all duration-300 text-[15px]"
                  disabled={isLoading}
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || input.trim() === ''}
                  className={`bg-black text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 text-[15px] ${
                    isLoading || input.trim() === ''
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-[var(--accent-secondary)] hover:shadow-sm'
                  } ${isSending ? 'scale-95' : 'scale-100'}`}
                >
                  Send
                </button>
              </div>
              <div className="mt-2 text-center">
                <p className="text-[10px] text-[var(--text-light)]">Lavet af AIchatlab</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: var(--bg-secondary);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--border-color);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: var(--text-light);
        }

        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: var(--border-color) var(--bg-secondary);
        }
      `}</style>
    </>
  );
}