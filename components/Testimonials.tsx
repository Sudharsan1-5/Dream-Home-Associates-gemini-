import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
                    Success Stories From Our Customers
                </h2>
                <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-5xl mx-auto">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg flex flex-col">
                            <div className="flex mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-secondary fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-700 italic mb-6 flex-grow">"{testimonial.quote}"</p>
                            <div>
                                <p className="font-bold text-lg text-primary">{testimonial.name}</p>
                                <p className="text-gray-600">{testimonial.location}</p>
                                <p className="text-sm text-gray-500 mt-1">{testimonial.loanType}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
