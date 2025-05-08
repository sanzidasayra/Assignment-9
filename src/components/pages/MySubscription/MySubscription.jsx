import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';

const MySubscription = () => {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('mySubscriptions');
    const parsed = stored ? JSON.parse(stored) : [];
    setSubscriptions(parsed);
    console.log('Stored Subscriptions:', parsed);
  }, []);

  if (subscriptions.length === 0) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-xl font-bold">No subscriptions found.</h2>
      </div>
    );
  }

  return (
    <>
    <Navbar/>
    <div className="w-11/12 md:w-10/12 mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6 text-center">My Subscriptions</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subscriptions.map((box) => (
          <div
            key={box.id}
            className="border shadow-md rounded-lg p-4 bg-white"
          >
            <img
              src={box.thumbnail || box.banner}
              alt={box.name}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold">{box.name}</h2>
            <p className="text-sm text-gray-600 mt-2">{box.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default MySubscription;
