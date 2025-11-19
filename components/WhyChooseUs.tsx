
import React from 'react';
import { STATS } from '../constants';

const WhyChooseUs: React.FC = () => {
    return (
        <section className="py-16 bg-blue-50">
            <div className="container mx-auto px-4 sm:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-3">
                    Why Choose Dream Home Associates in Trichy?
                </h2>
                <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                    The most trusted loan consultant in Trichy, Tamil Nadu with proven track record
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {STATS.map((stat, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                            <div className="flex justify-center mb-4">
                                <div className="bg-secondary/10 p-4 rounded-full">
                                    <stat.icon className="w-8 h-8 text-secondary" />
                                </div>
                            </div>
                            <p className="text-4xl font-extrabold text-primary mb-2">{stat.number}</p>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{stat.title}</h3>
                            <p className="text-gray-600">{stat.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;