import React from 'react';

const CustomerReview = () => {

    const reviews = [
        {name: "Sunehra", rating: 5, comment:  "I was genuinely surprised by the creativity in the winter-themed box. From the cozy socks to the handmade candle, every item felt thoughtful and seasonally perfect. It really made my month!"}, 
        {name: "Ayesha", rating: 5, comment: "This subscription box is a great way to treat yourself. The packaging was beautiful, and the items were unique. I especially loved the winter cocoa mix – it reminded me of childhood winters."} ,
        {name: "Maliha", rating: 5, comment: "IceNest has become something I look forward to every season. The attention to detail in both product selection and design is amazing. It’s like receiving a curated gift from a friend!"
    } 
    ]
    return (
        <section className="w-10/12 mx-auto bg-gray-100 py-12  rounded-2xl shadow-2xl">
      <h2 className="text-3xl font-bold text-center mb-8">Customer's review</h2>
      <div className="grid md:grid-cols-3 gap-6 px-6">
        {reviews.map((rev, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-lg font-medium">{rev.comment}</p>
            <div className="mt-4 text-yellow-500">
              {"★".repeat(rev.rating)}{"☆".repeat(5 - rev.rating)}
            </div>
            <p className="mt-2 text-sm text-gray-600">- {rev.name}</p>
          </div>
        ))}
      </div>
    </section>
    );
};

export default CustomerReview;