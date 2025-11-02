import React from 'react';
import { PHONE_NUMBER, LOAN_TYPES, WHATSAPP_NUMBER } from '../constants';

const Footer: React.FC = () => {
    const email = 'dreamhomeassociates@gmail.com';
    return (
        <footer className="bg-gray-800 text-gray-300 py-16">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">Dream Home Associates</h3>
                        <p className="text-secondary font-semibold mb-2">Your Loan, Simplified</p>
                        <p className="text-sm">Connecting borrowers with the right banks across Tamil Nadu for over 5 years.</p>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-white">Home</a></li>
                            <li><a href="#" className="hover:text-white">About Us</a></li>
                            <li><a href="#" className="hover:text-white">Contact</a></li>
                            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-4">Loan Types</h4>
                        <ul className="space-y-2">
                            {LOAN_TYPES.map(type => (
                                <li key={type}><a href="#" className="hover:text-white">{type}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-white mb-4">Contact Us</h4>
                        <ul className="space-y-2">
                            <li><a href={`tel:${PHONE_NUMBER}`} className="hover:text-white">📞 {PHONE_NUMBER}</a></li>
                            <li><a href={`mailto:${email}`} className="hover:text-white">📧 {email}</a></li>
                             <li><a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="hover:text-white">💬 WhatsApp: {PHONE_NUMBER}</a></li>
                            <li><p>📍 Serving across Tamil Nadu</p></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-700 pt-8 text-center text-sm">
                    <p>&copy; 2024 Dream Home Associates. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;