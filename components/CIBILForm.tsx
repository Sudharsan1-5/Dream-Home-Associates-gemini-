
import React, { useState } from 'react';
import { LOAN_TYPES, WHATSAPP_NUMBER } from '../constants';

const CIBILForm: React.FC = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        mobile: '',
        email: '',
        loanType: LOAN_TYPES[0],
        loanAmount: ''
    });
    const [errors, setErrors] = useState({ mobile: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateMobile = () => {
        const mobilePattern = /^[6-9]\d{9}$/;
        if (!mobilePattern.test(formData.mobile)) {
            setErrors({ ...errors, mobile: 'Please enter a valid 10-digit Indian mobile number.' });
            return false;
        }
        setErrors({ ...errors, mobile: '' });
        return true;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.fullName && validateMobile()) {
            const message = `Hi, I filled the CIBIL check form.\nName: ${formData.fullName}\nMobile: ${formData.mobile}\nLoan Type: ${formData.loanType}\nAmount Needed: ${formData.loanAmount || 'Not specified'}`;
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
            alert('Thank you! You will be redirected to WhatsApp to send your details.');
        } else {
             if (!formData.fullName) alert('Please enter your full name.');
             validateMobile();
        }
    };

    return (
        <section className="py-16 bg-blue-50">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-2xl mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-2xl">
                    <h2 className="text-3xl font-bold text-center text-primary mb-2">Check Your CIBIL Score & Loan Eligibility</h2>
                    <p className="text-center text-gray-600 mb-8">Absolutely FREE. Know your creditworthiness and get personalized recommendations.</p>
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="space-y-6">
                            <input type="text" name="fullName" placeholder="Full Name *" value={formData.fullName} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none bg-white text-gray-900 placeholder-gray-500" />
                            <div>
                                <input type="tel" name="mobile" placeholder="Mobile Number *" value={formData.mobile} onChange={handleChange} required pattern="[6-9]{1}[0-9]{9}" className={`w-full p-3 border ${errors.mobile ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-2 focus:ring-primary focus:outline-none bg-white text-gray-900 placeholder-gray-500`} />
                                {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
                            </div>
                            <input type="email" name="email" placeholder="Email Address (Optional)" value={formData.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none bg-white text-gray-900 placeholder-gray-500" />
                            <select name="loanType" value={formData.loanType} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none bg-white text-gray-900">
                                {LOAN_TYPES.map(type => <option key={type} value={type}>{type}</option>)}
                            </select>
                            <input type="text" name="loanAmount" placeholder="Loan Amount Needed (e.g., ₹15 Lakhs)" value={formData.loanAmount} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none bg-white text-gray-900 placeholder-gray-500" />
                        </div>
                        <button type="submit" className="w-full mt-8 bg-secondary text-white p-4 rounded-lg text-lg font-bold hover:bg-amber-600 transition-colors shadow-md">
                            Get My Free CIBIL Report
                        </button>
                    </form>
                    <p className="text-center text-gray-500 text-sm mt-6">We'll contact you within 24 hours with your CIBIL analysis and best loan options. Your information is 100% secure.</p>
                </div>
            </div>
        </section>
    );
};

export default CIBILForm;