import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';
import { NAME } from '../constants';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: `Hi! I'm ${NAME.split(' ')[0]}'s AI assistant. Ask me anything about his product design experience!`, timestamp: Date.now() }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
        const history = messages.map(m => ({ role: m.role, text: m.text }));
        history.push({ role: userMsg.role, text: userMsg.text });
        
        const responseText = await sendMessageToGemini(userMsg.text, history);
        
        const botMsg: ChatMessage = { role: 'model', text: responseText || "I couldn't generate a response.", timestamp: Date.now() };
        setMessages(prev => [...prev, botMsg]);
    } catch (err) {
        setMessages(prev => [...prev, { role: 'model', text: "Sorry, I encountered an error.", timestamp: Date.now() }]);
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

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex h-14 w-14 items-center justify-center rounded-full bg-text-main shadow-lg transition-transform hover:scale-110 active:scale-90"
        >
          <MessageSquare className="h-6 w-6 text-bg-main transition-colors group-hover:text-bg-card" />
        </button>
      )}

      {isOpen && (
        <div className="flex w-full flex-col overflow-hidden rounded-lg border border-bg-card bg-bg-main shadow-2xl sm:w-96 h-[500px] max-h-[80vh]">
          {/* Header */}
          <div className="flex items-center justify-between bg-bg-card p-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-accent/20">
                <Bot size={18} className="text-brand-accent" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-text-main">Pakin AI</h3>
                <p className="text-xs text-text-muted">Powered by Gemini</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="rounded p-1 text-text-muted hover:bg-white/10 hover:text-text-main"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-bg-main">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${msg.role === 'user' ? 'bg-text-main' : 'bg-brand-accent/20'}`}>
                    {msg.role === 'user' ? <User size={14} className="text-bg-main"/> : <Bot size={14} className="text-brand-accent"/>}
                </div>
                <div 
                  className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm font-normal ${
                    msg.role === 'user' 
                      ? 'bg-text-main text-bg-main rounded-tr-none' 
                      : 'bg-bg-card text-text-main rounded-tl-none border border-white/5'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3">
                 <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent/20">
                    <Bot size={14} className="text-brand-accent"/>
                </div>
                <div className="bg-bg-card border border-white/5 rounded-2xl rounded-tl-none px-4 py-2">
                   <div className="flex gap-1">
                     <span className="h-2 w-2 animate-bounce rounded-full bg-brand-accent/50"></span>
                     <span className="h-2 w-2 animate-bounce rounded-full bg-brand-accent/50 delay-75"></span>
                     <span className="h-2 w-2 animate-bounce rounded-full bg-brand-accent/50 delay-150"></span>
                   </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-bg-card bg-bg-main p-4">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about my design work..."
                className="w-full rounded-full border border-bg-card bg-bg-card/50 py-3 pl-4 pr-12 text-sm text-text-main placeholder-text-muted focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent font-normal"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="absolute right-1 top-1 rounded-full p-2 text-brand-accent transition hover:bg-white/10 disabled:opacity-50"
              >
                <Send size={18} />
              </button>
            </div>
            <div className="mt-2 text-center text-[10px] text-text-muted/50 font-normal">
                AI can make mistakes.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
