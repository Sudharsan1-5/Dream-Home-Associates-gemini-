
import React, { useState, useEffect } from 'react';

interface EMICalculatorProps {
  onGetOptionsClick: () => void;
}

const EMICalculator: React.FC<EMICalculatorProps> = ({ onGetOptionsClick }) => {
    const [amount, setAmount] = useState(2000000);
    const [rate, setRate] = useState(9);
    const [tenure, setTenure] = useState(15);
    const [emi, setEmi] = useState(0);

    useEffect(() => {
        const principal = amount;
        const monthlyRate = rate / 12 / 100;
        const months = tenure * 12;

        if (principal > 0 && monthlyRate > 0 && months > 0) {
            const calculatedEmi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
            setEmi(calculatedEmi);
        } else {
            setEmi(0);
        }
    }, [amount, rate, tenure]);

    const totalPayable = emi * tenure * 12;
    const totalInterest = totalPayable - amount;
    
    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 }).format(value);
    };

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
                    Calculate Your Monthly EMI
                </h2>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 bg-gray-50 p-8 rounded-xl shadow-lg">
                    <div>
                        <div className="mb-6">
                            <label className="block font-semibold text-gray-700 mb-2">Loan Amount: <span className="text-primary font-bold">{formatCurrency(amount)}</span></label>
                            <input type="range" min="100000" max="10000000" step="100000" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary" />
                        </div>
                        <div className="mb-6">
                            <label className="block font-semibold text-gray-700 mb-2">Interest Rate (% p.a.): <span className="text-primary font-bold">{rate.toFixed(2)}%</span></label>
                            <input type="range" min="6" max="18" step="0.05" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary" />
                        </div>
                        <div>
                            <label className="block font-semibold text-gray-700 mb-2">Loan Tenure (Years): <span className="text-primary font-bold">{tenure} Years</span></label>
                            <input type="range" min="1" max="30" step="1" value={tenure} onChange={(e) => setTenure(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary" />
                        </div>
                    </div>
                    <div className="bg-primary text-white p-8 rounded-lg flex flex-col justify-center text-center">
                        <p className="text-lg text-blue-200">Your Monthly EMI</p>
                        <p className="text-4xl lg:text-5xl font-extrabold my-2">{formatCurrency(emi)}</p>
                        <div className="mt-6 text-left space-y-2 text-blue-100">
                            <p><strong>Total Interest:</strong> {formatCurrency(totalInterest > 0 ? totalInterest : 0)}</p>
                            <p><strong>Total Payable:</strong> {formatCurrency(totalPayable > 0 ? totalPayable : 0)}</p>
                        </div>
                    </div>
                </div>
                 <div className="text-center mt-12">
                    <button onClick={onGetOptionsClick} className="bg-secondary text-white px-8 py-3 rounded-lg text-lg font-bold hover:bg-amber-600 transition-colors shadow-md">
                        Get Personalized Loan Options &rarr;
                    </button>
                </div>
            </div>
        </section>
    );
};

export default EMICalculator;