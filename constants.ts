import type { LoanType, Stat, Testimonial, BankPartner, LoanService, Problem, HowItWorksStep } from './types';
import { House, Wallet, Briefcase, Car, TrendingUp, Building, Target, Zap, IndianRupee, UserCheck, Phone, CheckCircle, Star } from 'lucide-react';

// IMPORTANT: UPDATE THIS PHONE NUMBER
export const PHONE_NUMBER = '+91-9944548814';
export const WHATSAPP_NUMBER = '919944548814'; // No '+' or '-'

export const PRE_FILLED_WHATSAPP_MESSAGE = "Hi, I need help with a loan. Can you assist me?";

export const BANK_PARTNERS: BankPartner[] = [
    { name: 'State Bank of India', logo: 'SBI', logoUrl: 'https://logos-world.net/wp-content/uploads/2021/02/SBI-Logo.png' },
    { name: 'HDFC Bank', logo: 'HDFC', logoUrl: 'https://logos-world.net/wp-content/uploads/2021/02/HDFC-Bank-Logo.png' },
    { name: 'ICICI Bank', logo: 'ICICI', logoUrl: 'https://logos-world.net/wp-content/uploads/2021/02/ICICI-Bank-Logo.png' },
    { name: 'Axis Bank', logo: 'Axis', logoUrl: 'https://logos-world.net/wp-content/uploads/2021/02/Axis-Bank-Logo.png' },
    { name: 'Punjab National Bank', logo: 'PNB', logoUrl: 'https://logos-world.net/wp-content/uploads/2021/03/Punjab-National-Bank-Logo.png' },
    { name: 'Bank of Baroda', logo: 'BoB', logoUrl: 'https://logos-world.net/wp-content/uploads/2021/02/Bank-of-Baroda-Logo.png' },
    { name: 'Canara Bank', logo: 'Canara', logoUrl: 'https://logos-world.net/wp-content/uploads/2021/03/Canara-Bank-Logo.png' },
    { name: 'Union Bank of India', logo: 'Union', logoUrl: 'https://logos-world.net/wp-content/uploads/2021/03/Union-Bank-of-India-Logo.png' },
    { name: 'IDFC First Bank', logo: 'IDFC', logoUrl: 'https://logos-world.net/wp-content/uploads/2021/03/IDFC-First-Bank-Logo.png' },
    { name: 'Kotak Mahindra Bank', logo: 'Kotak', logoUrl: 'https://logos-world.net/wp-content/uploads/2021/02/Kotak-Mahindra-Bank-Logo.png' },
];

export const LOAN_SERVICES: LoanService[] = [
    // FIX: Changed "Home Loans" to "Home Loan" to match LoanType.
    { name: 'Home Loan', icon: House, description: 'Buy your dream home in Trichy with competitive interest rates starting from 8.5%. Best home loan consultant in Trichy, Tamil Nadu.' },
    // FIX: Changed "Personal Loans" to "Personal Loan" to match LoanType.
    { name: 'Personal Loan', icon: Wallet, description: 'Instant personal loans in Trichy up to ₹25 lakhs for any urgent need. Quick approval and minimal documentation.' },
    // FIX: Changed "Business Loans" to "Business Loan" to match LoanType.
    { name: 'Business Loan', icon: Briefcase, description: 'Expand your business in Trichy with customized loan solutions. Business loan expert serving all of Tamil Nadu.' },
    // FIX: Changed "Car Loans" to "Car Loan" to match LoanType.
    { name: 'Car Loan', icon: Car, description: 'Drive your dream car with easy EMI options. Car loans in Trichy with lowest interest rates and fast approval.' },
    { name: 'Working Capital', icon: TrendingUp, description: 'Manage cash flow seamlessly for your business in Trichy. Working capital loans for SMEs across Tamil Nadu.' },
    { name: 'Loan Against Property', icon: Building, description: 'Unlock funds using your property as collateral. Loan against property in Trichy with competitive rates and flexible tenure.' },
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