
import type { LucideProps } from 'lucide-react';
import type React from 'react';

export type LoanType = 'Home Loan' | 'Personal Loan' | 'Business Loan' | 'Car Loan' | 'Working Capital' | 'Loan Against Property';

export interface BankPartner {
    name: string;
    logo: string;
    logoUrl?: string;
}

export interface LoanService {
    name: LoanType;
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
    description: string;
}

export interface Problem {
    text: string;
}

export interface Stat {
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
    number: string;
    title: string;
    description: string;
}

export interface HowItWorksStep {
    step: number;
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
    title: string;
    description: string;
}

export interface Testimonial {
    quote: string;
    name: string;
    location: string;
    loanType: string;
    rating: number;
}
