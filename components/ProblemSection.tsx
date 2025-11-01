import React from 'react';
import { XCircle, CheckCircle } from 'lucide-react';
import { PROBLEMS } from '../constants';

const ProblemSection: React.FC = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
                    Facing These Loan Challenges?
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-12">
                    {PROBLEMS.map((problem, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4 text-left">
                            <XCircle className="text-red-500 w-8 h-8 flex-shrink-0" />
                            <p className="text-gray-700 font-medium">{problem.text}</p>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center gap-3 bg-accent text-white py-4 px-8 rounded-lg max-w-lg mx-auto shadow-lg">
                    <CheckCircle className="w-8 h-8" />
                    <h3 className="text-xl md:text-2xl font-bold">
                        We Handle Everything For You
                    </h3>
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
