import React, { useState, useEffect, useCallback } from 'react';

// Define theme colors using constants for clean use in styles
const PRIMARY_COLOR = '#1e3a8a'; // Navy Blue
const SECONDARY_COLOR = '#d97706'; // Amber Gold

// Helper component for the Donut Chart (visualizing Principal vs. Interest)
const DonutChart = ({ principal, totalInterest }) => {
    const total = principal + totalInterest;
    if (total <= 0) return <div className="text-gray-500 text-sm">Enter loan details to see chart.</div>;

    const principalRatio = principal / total;
    const interestRatio = totalInterest / total;

    // SVG path calculation for a basic donut chart
    const size = 100;
    const center = size / 2;
    const radius = 45;
    const strokeWidth = 10;
    
    // Calculate end point for Principal arc
    const startAngle = 0;
    const endAnglePrincipal = principalRatio * 360;

    // Function to get SVG coordinates from an angle
    const getCoords = (angle) => {
        const x = center + radius * Math.cos((angle - 90) * Math.PI / 180);
        const y = center + radius * Math.sin((angle - 90) * Math.PI / 180);
        return `${x} ${y}`;
    };

    // Arc data for Principal
    const principalPath = principalRatio === 1.0
        ? `M ${center} ${center - radius} A ${radius} ${radius} 0 1 1 ${center} ${center + radius} A ${radius} ${radius} 0 1 1 ${center} ${center - radius} Z`
        : `M ${center} ${center - radius} A ${radius} ${radius} 0 ${endAnglePrincipal > 180 ? 1 : 0} 1 ${getCoords(endAnglePrincipal)}`;
    
    // Arc data for Interest (starting where Principal left off)
    const interestPath = interestRatio === 1.0
        ? null // Not needed if principal is already full circle
        : `M ${getCoords(endAnglePrincipal)} A ${radius} ${radius} 0 ${interestRatio > 180 ? 1 : 0} 1 ${getCoords(360)}`;

    return (
        <div className="relative w-40 h-40 mx-auto">
            <svg viewBox={`0 0 ${size} ${size}`} className="w-full h-full">
                {/* Principal Arc */}
                <path
                    d={principalPath}
                    fill="none"
                    stroke={PRIMARY_COLOR}
                    strokeWidth={strokeWidth}
                    transform={`translate(${center}, ${center}) rotate(-90) translate(-${center}, -${center})`}
                />
                {/* Interest Arc */}
                <path
                    d={interestPath}
                    fill="none"
                    stroke={SECONDARY_COLOR}
                    strokeWidth={strokeWidth}
                    transform={`translate(${center}, ${center}) rotate(-90) translate(-${center}, -${center})`}
                />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-xs font-semibold text-blue-200 leading-tight">Total Payment</p>
                {/* FIX: Changed color to SECONDARY_COLOR for visibility */}
                <p className="text-lg font-bold" style={{ color: SECONDARY_COLOR }}>{new Intl.NumberFormat('en-IN', { notation: 'compact', maximumFractionDigits: 1 }).format(total)}</p>
            </div>
        </div>
    );
};

// Helper component for the Range/Text dual input
const RangeInput = ({ label, value, setter, min, max, step, displayFormatter, rangeStep, inputType = 'number' }) => {
    return (
        <div className="mb-8">
            <div className="flex justify-between items-baseline mb-2">
                <label className="block font-bold text-gray-700">{label}</label>
                <span className="font-extrabold text-2xl" style={{ color: SECONDARY_COLOR }}>{displayFormatter(value)}</span>
            </div>
            
            <input 
                type="range" 
                min={min} 
                max={max} 
                step={rangeStep || step} 
                value={value} 
                onChange={(e) => setter(Number(e.target.value))} 
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" 
                style={{ accentColor: PRIMARY_COLOR }}
            />
            
            <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-gray-500">{displayFormatter(min)}</span>
                <input 
                    type={inputType}
                    min={min} 
                    max={max} 
                    step={step} 
                    value={value} 
                    onChange={(e) => setter(Number(e.target.value))} 
                    className="w-32 text-sm p-2 border border-gray-300 rounded-lg text-center font-medium focus:border-opacity-100"
                    style={{ borderColor: PRIMARY_COLOR, borderWidth: '2px' }}
                />
                <span className="text-sm text-gray-500">{displayFormatter(max)}</span>
            </div>
        </div>
    );
};


// Main Calculator Component
interface EMICalculatorProps {
    onGetOptionsClick?: () => void;
}

const EMICalculator: React.FC<EMICalculatorProps> = ({ onGetOptionsClick }) => {
    const [amount, setAmount] = useState(2000000);
    const [rate, setRate] = useState(9.0);
    const [tenure, setTenure] = useState(15);
    const [emi, setEmi] = useState(0);
    const [showAmortization, setShowAmortization] = useState(false);

    // --- Calculation Logic ---

    const calculateEMI = useCallback((principal, interestRate, years) => {
        const monthlyRate = interestRate / 12 / 100;
        const months = years * 12;

        if (principal > 0 && monthlyRate > 0 && months > 0) {
            const calculatedEmi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
            return calculatedEmi;
        }
        return 0;
    }, []);

    useEffect(() => {
        setEmi(calculateEMI(amount, rate, tenure));
    }, [amount, rate, tenure, calculateEMI]);

    const totalPayable = emi * tenure * 12;
    const totalInterest = totalPayable - amount;

    // --- Formatting Helpers ---

    const formatCurrency = useCallback((value: number, notation?: 'standard' | 'compact') => {
        return new Intl.NumberFormat('en-IN', { 
            style: 'currency', 
            currency: 'INR', 
            minimumFractionDigits: 0,
            maximumFractionDigits: notation === 'compact' ? 1 : 0,
            notation: notation === 'compact' ? 'compact' : 'standard'
        }).format(value > 0 ? value : 0);
    }, []);
    
    // --- Amortization Logic ---

    const generateAmortizationSchedule = () => {
        const P = amount;
        const R = rate;
        const N = tenure;
        let currentBalance = P;
        const monthlyRate = R / 12 / 100;
        const months = N * 12;
        let calculatedEmi = calculateEMI(P, R, N);
        
        if (calculatedEmi === 0 || N === 0) return [];

        let schedule = [];

        for (let year = 1; year <= N; year++) {
            let yearlyInterest = 0;
            let yearlyPrincipal = 0;
            let startBalance = currentBalance;
            
            for (let month = 1; month <= 12; month++) {
                const currentMonth = (year - 1) * 12 + month;
                if (currentBalance <= 0 || currentMonth > months) break;

                let interestPayment = currentBalance * monthlyRate;
                let principalPayment = calculatedEmi - interestPayment;
                
                if (currentMonth === months) {
                    principalPayment = currentBalance;
                    interestPayment = currentBalance * monthlyRate;
                    currentBalance = 0;
                } else if (currentBalance < principalPayment) {
                    principalPayment = currentBalance;
                    interestPayment = currentBalance * monthlyRate;
                    currentBalance = 0;
                } else {
                    currentBalance -= principalPayment;
                }

                yearlyInterest += principalPayment > 0 ? interestPayment : 0;
                yearlyPrincipal += principalPayment > 0 ? principalPayment : 0;
            }

            schedule.push({
                year,
                startBalance: startBalance,
                principalPaid: yearlyPrincipal,
                interestPaid: yearlyInterest,
                endingBalance: Math.max(0, currentBalance),
            });
            
            if(currentBalance <= 0) break;
        }
        return schedule;
    };

    const amortizationSchedule = generateAmortizationSchedule();

    // Calculate potential savings with better rate (0.5% lower)
    const betterRate = Math.max(6, rate - 0.5);
    const betterEMI = calculateEMI(amount, betterRate, tenure);
    const monthlySavings = emi - betterEMI;
    const totalSavings = monthlySavings * tenure * 12;

    return (
        <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 to-white antialiased relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(30,64,175,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Trust Badge */}
                <div className="flex justify-center mb-6">
                    <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold border-2 border-green-200">
                        <span className="text-lg">✓</span>
                        <span>Used by 500+ Happy Customers</span>
                    </div>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-3 font-heading" style={{ color: PRIMARY_COLOR }}>
                    Calculate Your Loan EMI Instantly
                </h2>
                <p className="text-lg md:text-xl text-gray-600 text-center mb-10 max-w-3xl mx-auto">
                    See exactly what you'll pay. Get the best rates in Trichy. Save thousands on your loan!
                </p>

                <div className="bg-white p-6 md:p-10 rounded-2xl shadow-2xl border-t-8" style={{ borderColor: SECONDARY_COLOR }}>
                    <div className="grid lg:grid-cols-3 gap-10">
                        
                        {/* 1. INPUTS COLUMN (2/3rds width) */}
                        <div className="lg:col-span-2 space-y-4">
                            
                            <RangeInput 
                                label="Loan Amount (P)"
                                value={amount}
                                setter={setAmount}
                                min={100000}
                                max={10000000}
                                step={100000}
                                rangeStep={100000}
                                displayFormatter={(val) => formatCurrency(val, 'compact')}
                            />

                            <RangeInput 
                                label="Interest Rate (% p.a.)"
                                value={rate}
                                setter={setRate}
                                min={6}
                                max={18}
                                step={0.05}
                                rangeStep={0.1}
                                displayFormatter={(val) => `${val.toFixed(2)}%`}
                            />

                            <RangeInput 
                                label="Loan Tenure (Years)"
                                value={tenure}
                                setter={setTenure}
                                min={1}
                                max={30}
                                step={1}
                                rangeStep={1}
                                displayFormatter={(val) => `${val} Years`}
                                inputType="tel" // Use tel for better mobile keyboard experience on pure numbers
                            />
                        </div>

                        {/* 2. RESULTS & CHART COLUMN (1/3rd width) */}
                        <div className="lg:col-span-1 flex flex-col items-center justify-center p-6 rounded-xl text-white shadow-inner" style={{ backgroundColor: PRIMARY_COLOR }}>
                            
                            <p className="text-xl font-light text-blue-200 mb-2">Your Monthly EMI</p>
                            <p className="text-4xl lg:text-5xl font-extrabold text-yellow-400 mb-4">
                                {formatCurrency(emi)}
                            </p>
                            
                            <DonutChart 
                                principal={amount} 
                                totalInterest={totalInterest} 
                            />

                            <div className="space-y-2 text-sm w-full mt-4">
                                <div className="flex justify-between border-b border-blue-800 pb-1">
                                    <span className="font-semibold text-blue-200">Principal:</span>
                                    <span className="font-bold text-white">{formatCurrency(amount)}</span>
                                </div>
                                <div className="flex justify-between border-b border-blue-800 pb-1">
                                    <span className="font-semibold text-blue-200">Total Interest:</span>
                                    <span className="font-bold text-yellow-400">{formatCurrency(totalInterest)}</span>
                                </div>
                                <div className="flex justify-between pt-2">
                                    <span className="font-extrabold text-lg" style={{ color: SECONDARY_COLOR }}>Total Payment:</span>
                                    <span className="font-extrabold text-lg text-white">{formatCurrency(totalPayable)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Savings Callout */}
                {totalSavings > 0 && (
                    <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6 shadow-lg">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="text-center md:text-left">
                                <p className="text-sm font-semibold text-green-700 mb-1">💰 YOU COULD SAVE</p>
                                <p className="text-3xl md:text-4xl font-extrabold text-green-600 financial-number">
                                    {formatCurrency(totalSavings)}
                                </p>
                                <p className="text-sm text-gray-600 mt-1">
                                    By getting just {(rate - betterRate).toFixed(1)}% lower interest rate!
                                </p>
                            </div>
                            <div className="flex-shrink-0">
                                <button
                                    onClick={onGetOptionsClick}
                                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-bold text-lg shadow-lg transition-all transform hover:scale-105"
                                >
                                    Get Lower Rate Now →
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* 3. AMORTIZATION SCHEDULE */}
                <div className="mt-12">
                    <button 
                        onClick={() => setShowAmortization(!showAmortization)} 
                        className="w-full md:w-auto mx-auto px-8 py-3 rounded-full text-lg font-bold transition-colors shadow-lg flex items-center justify-center"
                        style={{ backgroundColor: SECONDARY_COLOR, color: 'white' }}
                    >
                        {showAmortization ? 'Hide Yearly Schedule' : 'View Yearly Amortization Schedule'}
                        <span className={`ml-3 transform transition-transform duration-300 ${showAmortization ? 'rotate-180' : 'rotate-0'}`}>
                            {showAmortization ? '▲' : '▼'}
                        </span>
                    </button>

                    {showAmortization && (
                        <div className="mt-6 overflow-x-auto shadow-xl rounded-xl">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="text-white sticky top-0" style={{ backgroundColor: PRIMARY_COLOR }}>
                                    <tr>
                                        {['Year', 'Starting Balance', 'Principal Paid', 'Interest Paid', 'Ending Balance'].map(header => (
                                            <th key={header} scope="col" className="px-3 py-3 text-xs font-medium uppercase tracking-wider text-right last:text-right first:text-left whitespace-nowrap">
                                                {header}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {amortizationSchedule.map((yearData, index) => (
                                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 hover:bg-gray-100' : 'bg-white hover:bg-gray-100'}>
                                            <td className="px-3 py-3 text-sm font-medium text-gray-900 text-left">{yearData.year}</td>
                                            <td className="px-3 py-3 text-sm text-gray-700 text-right">{formatCurrency(yearData.startBalance)}</td>
                                            <td className="px-3 py-3 text-sm font-semibold text-right" style={{ color: PRIMARY_COLOR }}>{formatCurrency(yearData.principalPaid)}</td>
                                            <td className="px-3 py-3 text-sm font-semibold text-right" style={{ color: SECONDARY_COLOR }}>{formatCurrency(yearData.interestPaid)}</td>
                                            <td className="px-3 py-3 text-sm text-gray-700 text-right">{formatCurrency(yearData.endingBalance)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <p className="text-xs text-gray-500 mt-3 text-center p-2">
                                Note: Values are rounded to the nearest rupee and may vary slightly due to exact payment timing.
                            </p>
                        </div>
                    )}
                </div>

                {/* Main CTA with Urgency */}
                <div className="text-center mt-12">
                    <div className="inline-block">
                        <div className="mb-3">
                            <span className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
                                <span className="text-lg">⏰</span>
                                <span>Limited Time: 0.5% Rate Reduction Available!</span>
                            </span>
                        </div>
                        <button
                            onClick={onGetOptionsClick}
                            className="inline-flex items-center justify-center bg-[#1e3a8a] text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-opacity-90 transition-all transform hover:scale-105 shadow-2xl"
                        >
                            <span>Get Best Loan Options Now</span>
                            <span className="ml-2 text-2xl">→</span>
                        </button>
                        <p className="text-sm text-gray-500 mt-3">✓ Free Consultation | ✓ 72-Hour Approval | ✓ 500+ Happy Customers</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EMICalculator;