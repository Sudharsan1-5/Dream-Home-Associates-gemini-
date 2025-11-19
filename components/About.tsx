import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER, PRE_FILLED_WHATSAPP_MESSAGE } from '../constants';

const About: React.FC = () => {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PRE_FILLED_WHATSAPP_MESSAGE)}`;
    return (
        <section className="py-16 bg-blue-50">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid lg:grid-cols-5 gap-12 items-center">
                    <div className="lg:col-span-2 flex justify-center">
                        {/* Replace with actual photo */}
                        <div className="w-80 h-80 rounded-lg bg-gray-300 shadow-2xl overflow-hidden">
                           <img src="/vijay_babu.jpg" alt="Vijay Babu, Loan Expert" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                    <div className="lg:col-span-3">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Meet Your Loan Expert in Trichy</h2>
                        <div className="space-y-4 text-gray-700 text-lg">
                            <p className="font-bold text-xl">Hi, I'm Vijay Babu - Your Trusted Loan Consultant in Trichy</p>
                            <p>For over 5 years, I've been helping people across Trichy and Tamil Nadu navigate the complex world of loans. I started Dream Home Associates in Trichy because I saw too many deserving individuals getting rejected due to incomplete applications or wrong bank choices.</p>
                            <p>With strong relationships across 15+ banks and deep understanding of their approval processes, I've successfully helped 500+ customers in Trichy, Chennai, Coimbatore, and Madurai secure loans - even those with challenging CIBIL scores.</p>
                            <p>What sets me apart as a loan consultant in Trichy? I personally review every single case. I don't believe in one-size-fits-all solutions. Your financial situation is unique, and so should be your loan strategy.</p>
                            <p>Whether you need a home loan in Trichy, personal loan, or business loan, let me put my expertise to work for you.</p>
                        </div>
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-8 bg-accent text-white px-6 py-3 rounded-lg text-lg font-bold hover:bg-green-600 transition-colors shadow-md">
                            <MessageCircle size={22} />
                            <span>Talk to Vijay</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;