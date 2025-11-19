
import React from 'react';
import { BANK_PARTNERS } from '../constants';

const TrustBar: React.FC = () => {
    const extendedBankPartners = [...BANK_PARTNERS, ...BANK_PARTNERS]; // Duplicate for seamless loop

    return (
        <section className="py-12 bg-white border-y border-gray-100">
            <div className="container mx-auto px-4 sm:px-6 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
                    Authorized Partner With India's Leading Banks & NBFCs
                </h2>
                <div className="relative w-full overflow-hidden">
                    <div className="flex animate-infinite-scroll">
                        {extendedBankPartners.map((partner, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 w-48 h-24 mx-4 flex items-center justify-center p-4 border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                <img
                                    src={partner.logoUrl}
                                    alt={`${partner.name} - Loan Partner in Trichy`}
                                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                                    loading="lazy"
                                    onError={(e) => {
                                        // Fallback to text if image fails to load
                                        const target = e.target as HTMLImageElement;
                                        target.style.display = 'none';
                                        const fallback = document.createElement('span');
                                        fallback.className = 'text-gray-600 font-semibold text-lg';
                                        fallback.textContent = partner.logo;
                                        target.parentElement?.appendChild(fallback);
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                    {/* Gradient overlay for seamless fade effect */}
                    <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
                    <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
                </div>
            </div>
        </section>
    );
};

export default TrustBar;