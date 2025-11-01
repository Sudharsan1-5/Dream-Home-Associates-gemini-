
import React from 'react';
import { BANK_PARTNERS } from '../constants';

const TrustBar: React.FC = () => {
    const extendedBankPartners = [...BANK_PARTNERS, ...BANK_PARTNERS]; // Duplicate for seamless loop

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
                    Authorized Partner With India's Leading Banks & NBFCs
                </h2>
                <div className="relative w-full overflow-hidden">
                    <div className="flex animate-infinite-scroll">
                        {extendedBankPartners.map((partner, index) => (
                            <div key={index} className="flex-shrink-0 w-48 h-24 mx-4 flex items-center justify-center p-2 border border-gray-200 rounded-lg bg-gray-50">
                                <span className="text-gray-600 font-semibold text-lg">{partner.logo}</span>
                            </div>
                        ))}
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white via-transparent to-white pointer-events-none"></div>
                </div>
            </div>
        </section>
    );
};

export default TrustBar;
