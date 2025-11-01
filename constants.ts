import type { LoanType, Stat, Testimonial, BankPartner, LoanService, Problem, HowItWorksStep } from './types';
import { House, Wallet, Briefcase, Car, TrendingUp, Building, Target, Zap, IndianRupee, UserCheck, Phone, CheckCircle, Star } from 'lucide-react';

// IMPORTANT: UPDATE THIS PHONE NUMBER
export const PHONE_NUMBER = '+91-8870308819';
export const WHATSAPP_NUMBER = '918870308819'; // No '+' or '-'

export const PRE_FILLED_WHATSAPP_MESSAGE = "Hi, I need help with a loan. Can you assist me?";

export const BANK_PARTNERS: BankPartner[] = [
    { name: 'State Bank of India', logo: 'SBI' },
    { name: 'HDFC Bank', logo: 'HDFC' },
    { name: 'ICICI Bank', logo: 'ICICI' },
    { name: 'Axis Bank', logo: 'Axis' },
    { name: 'Punjab National Bank', logo: 'PNB' },
    { name: 'Bank of Baroda', logo: 'BoB' },
    { name: 'Canara Bank', logo: 'Canara' },
    { name: 'Union Bank of India', logo: 'Union' },
    { name: 'IDFC First Bank', logo: 'IDFC' },
    { name: 'Kotak Mahindra Bank', logo: 'Kotak' },
];

export const LOAN_SERVICES: LoanService[] = [
    // FIX: Changed "Home Loans" to "Home Loan" to match LoanType.
    { name: 'Home Loan', icon: House, description: 'Buy your dream home with competitive interest rates starting from 8.5%' },
    // FIX: Changed "Personal Loans" to "Personal Loan" to match LoanType.
    { name: 'Personal Loan', icon: Wallet, description: 'Instant personal loans up to ₹25 lakhs for any urgent need' },
    // FIX: Changed "Business Loans" to "Business Loan" to match LoanType.
    { name: 'Business Loan', icon: Briefcase, description: 'Expand your business with customized loan solutions' },
    // FIX: Changed "Car Loans" to "Car Loan" to match LoanType.
    { name: 'Car Loan', icon: Car, description: 'Drive your dream car with easy EMI options' },
    { name: 'Working Capital', icon: TrendingUp, description: 'Manage cash flow seamlessly for your business' },
    { name: 'Loan Against Property', icon: Building, description: 'Unlock funds using your property as collateral' },
];

export const PROBLEMS: Problem[] = [
    { text: 'Loan applications rejected repeatedly' },
    { text: 'Confused by different bank offers' },
    { text: 'Low CIBIL score holding you back' },
    { text: "Don't know which documents needed" },
    { text: 'No time to visit multiple banks' },
    { text: 'Processing taking too long' },
];

export const STATS: Stat[] = [
    { icon: Target, number: '500+', title: 'Happy Customers', description: 'Proven track record across Tamil Nadu' },
    { icon: Zap, number: '72 Hours', title: 'Quick Processing', description: 'Get preliminary approval in just 3 days' },
    { icon: Building, number: '15+', title: 'Bank Partners', description: 'We find the best match for your profile' },
    { icon: IndianRupee, number: '₹0', title: 'Zero Hidden Charges', description: 'Pay only after successful disbursement' },
    { icon: TrendingUp, number: '40%', title: 'Higher Approval', description: 'Multi-bank approach increases success' },
    { icon: UserCheck, number: 'Personal', title: 'Dedicated Attention', description: 'Vijay personally handles every case' },
];

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
    {
        step: 1,
        icon: Phone,
        title: 'Share Your Requirements',
        description: 'Quick 5-minute call or WhatsApp chat to understand your loan needs and financial situation.',
    },
    {
        step: 2,
        icon: Building,
        title: 'We Handle Everything',
        description: 'We apply to 3-5 banks simultaneously, prepare your documents, and coordinate with bank officials.',
    },
    {
        step: 3,
        icon: CheckCircle,
        title: 'Choose Best Offer',
        description: 'Compare multiple offers, we negotiate best terms, and guide you till complete disbursement.',
    },
];

export const TESTIMONIALS: Testimonial[] = [
    { quote: "I needed ₹5 lakhs urgently for medical emergency. Vijay sir arranged personal loan from HDFC within 4 days. Very transparent process, no hidden charges!", name: 'Suresh M.', location: 'Coimbatore', loanType: 'Personal Loan - ₹5 Lakhs', rating: 5 },
    { quote: "My CIBIL score was only 625 and two banks rejected my home loan. Vijay sir applied to multiple banks and got approval from SBI. Forever grateful!", name: 'Priya Ramesh', location: 'Chennai', loanType: 'Home Loan - ₹22 Lakhs', rating: 5 },
    { quote: "Expanding my textile business needed working capital. Vijay guided me through entire process and negotiated better interest rate than I expected. Highly recommend!", name: 'Karthik Sundaram', location: 'Madurai', loanType: 'Business Loan - ₹18 Lakhs', rating: 5 },
    { quote: "As a first-time home buyer, I was confused about documents and eligibility. Vijay sir explained everything patiently and got my loan approved in one week!", name: 'Deepa K.', location: 'Trichy', loanType: 'Home Loan - ₹15 Lakhs', rating: 5 },
];

export const LOAN_TYPES: LoanType[] = [
    'Home Loan',
    'Personal Loan',
    'Business Loan',
    'Car Loan',
    'Working Capital',
    'Loan Against Property'
];