import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_NUMBER, PRE_FILLED_WHATSAPP_MESSAGE } from '../constants';

interface HeroProps {
    onGetStartedClick: () => void;
}

const Hero: React.FC<HeroProps> = () => {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PRE_FILLED_WHATSAPP_MESSAGE)}`;

    return (
        <section className="bg-blue-50 py-20 md:py-32">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight mb-4">
                            Loan Trichy - Best Loan Consultant in Trichy | 72-Hour Approval Guarantee
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 mb-8">
                            Expert Loan Services in Trichy, Tamil Nadu - Home Loan, Personal Loan, Business Loan | 500+ Happy Customers | 40% Higher Approval Rate | Zero Hidden Charges
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-800 transition-transform transform hover:scale-105 shadow-lg">
                                <Phone size={24} />
                                <span>Call Now: {PHONE_NUMBER}</span>
                            </a>
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-green-600 transition-transform transform hover:scale-105 shadow-lg">
                                <MessageCircle size={24} />
                                <span>WhatsApp Us</span>
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        {/* Replace with actual photo */}
                        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gray-300 mb-4 overflow-hidden shadow-2xl border-4 border-white">
                           <img src="/vijay_babu.jpg" alt="Vijay Babu, Founder of Dream Home Associates" className="w-full h-full object-cover" />
                        </div>
                        <p className="text-center text-gray-700 font-semibold italic">"Hi, I'm Vijay Babu - I'll personally handle your case"</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;