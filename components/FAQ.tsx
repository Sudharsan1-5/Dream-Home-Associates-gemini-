import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "How to get a loan in Trichy?",
        answer: "To get a loan in Trichy, contact Dream Home Associates at +91-9944548814. We provide home loans, personal loans, business loans, car loans with 72-hour approval guarantee. Our expert loan consultants will guide you through the entire process from documentation to disbursement."
    },
    {
        question: "What is the best loan consultant in Trichy?",
        answer: "Dream Home Associates is the best loan consultant in Trichy with 500+ satisfied customers and 4.9 star rating. We are authorized partners of SBI, HDFC, ICICI, Axis Bank and provide expert guidance for all types of loans with lowest interest rates starting from 8.5%."
    },
    {
        question: "What types of loans are available in Trichy?",
        answer: "In Trichy, Dream Home Associates provides: 1) Home Loans up to ₹5 crores, 2) Personal Loans up to ₹25 lakhs, 3) Business Loans for SMEs, 4) Car Loans for new/used vehicles, 5) Loan Against Property, 6) Working Capital Loans. All with competitive interest rates and flexible tenure."
    },
    {
        question: "What is the interest rate for home loan in Trichy?",
        answer: "Home loan interest rates in Trichy start from 8.5% per annum through Dream Home Associates. Rates vary based on loan amount, tenure, credit score and bank. We help you get the lowest possible rates from top banks like SBI, HDFC, ICICI, Axis Bank."
    },
    {
        question: "How long does loan approval take in Trichy?",
        answer: "Dream Home Associates offers 72-hour loan approval guarantee in Trichy. For personal loans, approval can happen within 24-48 hours. Home loans and business loans typically take 3-7 days depending on documentation completeness."
    },
    {
        question: "Can I get a loan with low CIBIL score in Trichy?",
        answer: "Yes, Dream Home Associates helps customers with low CIBIL scores get loans in Trichy. We provide CIBIL score improvement guidance and connect you with lenders who offer loans for lower credit scores. We work with multiple banks to find the best option for your situation."
    },
    {
        question: "Which banks provide loans through Dream Home Associates in Trichy?",
        answer: "Dream Home Associates is an authorized partner of 15+ banks in Trichy including State Bank of India (SBI), HDFC Bank, ICICI Bank, Axis Bank, Kotak Mahindra Bank, IndusInd Bank, Yes Bank, IDFC First Bank, Bajaj Finserv, and Tata Capital. We help you compare and choose the best option."
    },
    {
        question: "What documents are required for loan in Trichy?",
        answer: "Basic documents for loan in Trichy: 1) Identity Proof (Aadhaar, PAN Card), 2) Address Proof, 3) Income Proof (Salary slips/ITR), 4) Bank Statements (6 months), 5) Property documents (for home loan). Dream Home Associates assists with documentation and ensures smooth processing."
    }
];

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        Frequently Asked Questions About Loans in Trichy
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Get answers to common questions about loan services in Trichy, Tamil Nadu
                    </p>
                </div>
                <div className="max-w-4xl mx-auto space-y-4">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-4 text-left bg-white hover:bg-blue-50 transition-colors flex justify-between items-center"
                                aria-expanded={openIndex === index}
                            >
                                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                                    {faq.question}
                                </h3>
                                {openIndex === index ? (
                                    <ChevronUp className="text-primary flex-shrink-0" size={24} />
                                ) : (
                                    <ChevronDown className="text-primary flex-shrink-0" size={24} />
                                )}
                            </button>
                            {openIndex === index && (
                                <div className="px-6 py-4 bg-blue-50 border-t border-gray-200">
                                    <p className="text-gray-700 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <p className="text-lg text-gray-600 mb-4">
                        Still have questions about getting a loan in Trichy?
                    </p>
                    <a
                        href="tel:+919944548814"
                        className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-800 transition-transform transform hover:scale-105 shadow-lg"
                    >
                        Call Us: +91-9944548814
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
