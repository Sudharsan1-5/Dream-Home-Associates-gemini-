
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

const FloatingWhatsApp: React.FC = () => {
    const message = "Hi, I'm interested in a loan. Can you help me?";
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-accent text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-40 transform hover:scale-110 transition-transform animate-pulse-subtle"
            aria-label="Chat with us on WhatsApp"
        >
            <MessageCircle size={32} />
        </a>
    );
};

export default FloatingWhatsApp;
