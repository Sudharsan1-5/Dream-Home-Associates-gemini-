
import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_NUMBER, PRE_FILLED_WHATSAPP_MESSAGE, BUSINESS_NAME } from '../constants';

const Header: React.FC = () => {
    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 200);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PRE_FILLED_WHATSAPP_MESSAGE)}`;

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isSticky ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white/80 backdrop-blur-sm'}`}>
            <div className="container mx-auto px-4 sm:px-6 py-3">
                <div className="flex justify-between items-center">
                    <a
                        href="#home"
                        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                        className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-105"
                        aria-label="Go to home"
                    >
                        <img src="/logo.svg" alt={BUSINESS_NAME} className="h-10 w-auto" />
                    </a>
                    <div className={`flex items-center space-x-2 transition-all duration-300 ${isSticky ? 'opacity-100 scale-100' : 'opacity-90 scale-95'}`}>
                        <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2 bg-primary text-white px-3 py-2 rounded-md text-sm font-semibold hover:bg-blue-800 transition-colors">
                            <Phone size={16} />
                            <span className="hidden sm:inline">Call</span>
                        </a>
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-accent text-white px-3 py-2 rounded-md text-sm font-semibold hover:bg-green-600 transition-colors">
                            <MessageCircle size={16} />
                            <span className="hidden sm:inline">WhatsApp</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;