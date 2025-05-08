import React from 'react';

const CustomerReview = () => {

    const reviews = [
        { 
            name: "Zendaya", 
            rating: 5, 
            comment: "I was genuinely surprised by the creativity in the winter-themed box. From the cozy socks to the handmade candle, every item felt thoughtful and seasonally perfect. It really made my month!", 
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Zendaya_2011.jpg/250px-Zendaya_2011.jpg"
        }, 
        { 
            name: "Scarlett Johansson", 
            rating: 5, 
            comment: "This subscription box is a great way to treat yourself. The packaging was beautiful, and the items were unique. I especially loved the winter cocoa mix – it reminded me of childhood winters.", 
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Scarlett_Johansson_SDCC_2013_by_Gage_Skidmore_1.jpg/250px-Scarlett_Johansson_SDCC_2013_by_Gage_Skidmore_1.jpg" 
        },
        { 
            name: "Emma Watson", 
            rating: 5, 
            comment: "IceNest has become something I look forward to every season. The attention to detail in both product selection and design is amazing. It’s like receiving a curated gift from a friend!", 
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Emma_Watson_2013.jpg/250px-Emma_Watson_2013.jpg"
        }
    ];

    return (
        <section className="w-10/12 mx-auto bg-gray-100 py-12 rounded-2xl shadow-2xl">
            <h2 className="text-3xl font-bold text-center mb-8">Customer's Review</h2>
            <div className="grid md:grid-cols-3 gap-6 px-6">
                {reviews.map((rev, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                        {/* Image and Name */}
                        <div className="flex items-center mb-4">
                            <img src={rev.image} alt={rev.name} className="w-12 h-12 rounded-full mr-4" />
                            <p className="text-lg font-medium">{rev.name}</p>
                        </div>
                        
                        {/* Review Comment */}
                        <p className="text-lg font-medium">{rev.comment}</p>
                        
                        {/* Rating */}
                        <div className="mt-4 text-yellow-500">
                            {"★".repeat(rev.rating)}{"☆".repeat(5 - rev.rating)}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CustomerReview;
