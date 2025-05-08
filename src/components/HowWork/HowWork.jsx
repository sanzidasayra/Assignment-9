import React from 'react';

const HowWork = () => {
    const steps = [
        { step: "1", title: "Choose a Box", detail: "Browse and select your favorite subscription theme." },
        { step: "2", title: "Create Account", detail: "Sign up to manage your subscription easily." },
        { step: "3", title: "Subscribe", detail: "Confirm and get ready for your first box!" },
        { step: "4", title: "Enjoy", detail: "Receive monthly surprises delivered to your door." },
      ];
    return (
        <section className="py-12 border border-white shadow-2xl bg-white w-10/12 mx-auto mt-10 rounded-2xl">
      <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
      <div className="grid md:grid-cols-4 gap-6 px-6 text-center">
        {steps.map((s, i) => (
          <div key={i} className="p-6 border border-blue-100 bg-blue-100 rounded-lg shadow hover:shadow-lg transition">
            <div className="text-4xl font-bold text-blue-500">{s.step}</div>
            <h3 className="text-xl font-semibold mt-2">{s.title}</h3>
            <p className="text-sm mt-2 text-gray-600">{s.detail}</p>
          </div>
        ))}
      </div>
    </section>
    );
};

export default HowWork;