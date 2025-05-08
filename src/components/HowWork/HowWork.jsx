import React from 'react';
import { FaBox, FaUserPlus, FaGift, FaSnowflake } from 'react-icons/fa'; // Winter-themed icons

const HowWork = () => {
    const steps = [
        { step: "1", title: "Choose a Box", detail: "Browse and select your favorite subscription theme.", icon: <FaBox /> },
        { step: "2", title: "Create Account", detail: "Sign up to manage your subscription easily.", icon: <FaUserPlus /> },
        { step: "3", title: "Subscribe", detail: "Confirm and get ready for your first box!", icon: <FaGift /> },
        { step: "4", title: "Enjoy", detail: "Receive monthly surprises delivered to your door.", icon: <FaSnowflake /> },
    ];

    return (
        <section className="py-12 bg-gradient-to-r from-blue-50 via-blue-200 to-blue-300 shadow-2xl w-10/12 mx-auto mt-10 rounded-2xl">
            <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-800">How It Works</h2>
            <div className="grid md:grid-cols-4 gap-6 px-6 text-center">
                {steps.map((s, i) => (
                    <div 
                        key={i} 
                        className="p-6 border border-blue-100 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105 hover:bg-blue-100"
                    >
                        <div className="flex justify-center items-center mb-4">
                            <div className="text-6xl text-blue-500">{s.icon}</div>
                        </div>
                        <div className="text-3xl font-bold text-blue-500">{s.step}</div>
                        <h3 className="text-xl font-semibold mt-2">{s.title}</h3>
                        <p className="text-sm mt-2 text-gray-600">{s.detail}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowWork;
