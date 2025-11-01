
import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_NUMBER, PRE_FILLED_WHATSAPP_MESSAGE } from '../constants';

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
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isSticky ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    <div className="text-xl font-bold text-primary">
                        Dream Home Associates
                    </div>
                    <div className={`transition-opacity duration-300 ${isSticky ? 'opacity-100 flex items-center space-x-2' : 'opacity-0 hidden'}`}>
                        <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2 bg-primary text-white px-3 py-2 rounded-md text-sm font-semibold hover:bg-blue-800 transition-colors">
                            <Phone size={16} />
                            <span>Call</span>
                        </a>
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-accent text-white px-3 py-2 rounded-md text-sm font-semibold hover:bg-green-600 transition-colors">
                            <MessageCircle size={16} />
                            <span>WhatsApp</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
