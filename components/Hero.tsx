import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { PHONE_NUMBER, WHATSAPP_NUMBER, PRE_FILLED_WHATSAPP_MESSAGE } from '../constants';

interface HeroProps {
    onGetStartedClick: () => void;
}

const Hero: React.FC<HeroProps> = () => {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PRE_FILLED_WHATSAPP_MESSAGE)}`;

    return (
        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 md:py-28 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(30,64,175,0.4) 1px, transparent 0)', backgroundSize: '50px 50px' }}></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Urgency Banner */}
                <div className="flex justify-center mb-6">
                    <div className="inline-flex items-center gap-2 bg-red-500 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg animate-pulse">
                        <span>🔥</span>
                        <span className="hidden xs:inline">Special: </span>
                        <span>Lowest Rates This Month Only!</span>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="text-center md:text-left">
                        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4">
                            <span>⭐</span>
                            <span>4.9/5 | 500+ Happy Customers</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-tight mb-4 font-heading">
                            Get Your Dream Loan in <span className="text-secondary">Trichy</span> - 72 Hours Guaranteed!
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                            <span className="font-semibold">Home | Personal | Business Loans</span><br className="hidden sm:block"/>
                            <span className="text-sm sm:text-base">
                                <span className="text-primary font-semibold">✓ 40% Higher Approval</span> |
                                <span className="text-primary font-semibold"> ✓ Zero Hidden Fees</span> |
                                <span className="text-primary font-semibold"> ✓ Best Rates</span>
                            </span>
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                            <a href={`tel:${PHONE_NUMBER}`} className="flex items-center justify-center gap-2 bg-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-bold hover:bg-blue-800 transition-transform transform hover:scale-105 shadow-lg">
                                <Phone size={20} />
                                <span className="hidden xs:inline">Call: </span>
                                <span className="text-sm sm:text-base">{PHONE_NUMBER}</span>
                            </a>
                            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-accent text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-bold hover:bg-green-600 transition-transform transform hover:scale-105 shadow-lg">
                                <MessageCircle size={20} />
                                <span>WhatsApp Us</span>
                            </a>
                        </div>
                        {/* Trust Signals */}
                        <div className="mt-6 flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600">
                            <span className="flex items-center gap-1">✓ 15+ Bank Partners</span>
                            <span className="flex items-center gap-1">✓ Free Consultation</span>
                            <span className="flex items-center gap-1">✓ 72-Hr Approval</span>
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