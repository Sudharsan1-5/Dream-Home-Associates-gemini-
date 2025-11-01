
import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_NUMBER, PRE_FILLED_WHATSAPP_MESSAGE } from '../constants';

const FinalCTA: React.FC = () => {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PRE_FILLED_WHATSAPP_MESSAGE)}`;

    return (
        <section className="py-20 bg-primary text-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
                    Ready to Get Your Loan Approved?
                </h2>
                <p className="text-lg md:text-xl text-blue-200 mb-10">
                    Join 500+ satisfied customers who trusted Dream Home Associates
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href={`tel:${PHONE_NUMBER}`} className="flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-200 transition-transform transform hover:scale-105 shadow-lg">
                        <Phone size={24} />
                        <span>Call Now: {PHONE_NUMBER}</span>
                    </a>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-green-600 transition-transform transform hover:scale-105 shadow-lg">
                        <MessageCircle size={24} />
                        <span>WhatsApp Us</span>
                    </a>
                </div>
                <p className="mt-8 text-blue-300">Available Monday to Saturday, 9 AM to 7 PM</p>
            </div>
        </section>
    );
};

export default FinalCTA;
