
import React from 'react';
import { HOW_IT_WORKS_STEPS } from '../constants';

const HowItWorks: React.FC = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
                    Simple 3-Step Process
                </h2>
                <div className="grid md:grid-cols-3 gap-8 md:gap-4 text-center relative">
                    {/* Dashed lines for desktop view */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-full -translate-y-1/2">
                        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="absolute top-[-3rem] left-0">
                            <line x1="25%" y1="0" x2="75%" y2="0" stroke="#F59E0B" strokeWidth="2" strokeDasharray="5,5" />
                        </svg>
                    </div>

                    {HOW_IT_WORKS_STEPS.map((step) => (
                        <div key={step.step} className="relative flex flex-col items-center p-6">
                            <div className="relative mb-6">
                                <div className="bg-blue-100 p-6 rounded-full">
                                    <step.icon className="w-16 h-16 text-primary" />
                                </div>
                                <span className="absolute -top-2 -right-2 bg-secondary text-white w-10 h-10 flex items-center justify-center rounded-full font-bold text-xl border-4 border-white">{step.step}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;