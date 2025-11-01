import React from 'react';
import { ArrowRight } from 'lucide-react';
import { LOAN_SERVICES } from '../constants';

interface LoanTypesProps {
    onCheckEligibilityClick: () => void;
}

const LoanTypes: React.FC<LoanTypesProps> = ({ onCheckEligibilityClick }) => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
                    Loan Solutions For Every Need
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                    {LOAN_SERVICES.map((service, index) => (
                        <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
                            <div className="mb-4">
                                <service.icon className="w-12 h-12 text-secondary" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.name}</h3>
                            <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                            <button
                                onClick={onCheckEligibilityClick}
                                className="mt-auto group flex items-center gap-2 text-primary font-bold hover:text-blue-800 transition-colors"
                            >
                                Check Eligibility
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LoanTypes;
