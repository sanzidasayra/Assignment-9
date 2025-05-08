import React, { useState } from 'react';
import Navbar from '../pages/Navbar';
import Footer from '../pages/Footer';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const SubBoxCardDetails = () => {
  const allBoxes = useLoaderData();
  const { id } = useParams();

  const selectedBox = allBoxes.find(box => box.id === parseInt(id));

  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState('');
  const [reviews, setReviews] = useState([]);
  const [showReviewSection, setShowReviewSection] = useState(false);
  const [subscribed, setSubscribed] = useState(false);


  const handleReviewSubmit = (e) => {
    e.preventDefault();

    const parsedRating = parseInt(rating, 10);

    if (!reviewText.trim()) {
      toast.error('Please write a review before submitting.');
      return;
    }

    if (isNaN(parsedRating) || parsedRating < 1 || parsedRating > 5) {
      toast.error('Please provide a rating between 1 and 5.');
      return;
    }

    const newReview = {
      text: reviewText,
      rating: parsedRating,
    };

    setReviews([...reviews, newReview]);
    setReviewText('');
    setRating('');
    toast.success('Review submitted successfully!');
  };

  if (!selectedBox) {
    return <div className="text-center mt-10">Loading or No Data Found for ID: {id}</div>;
  }

  return (
    <div>

      <div className="w-11/12 md:w-10/12 mx-auto border bg-blue-50 border-blue-50 shadow-2xl p-6 md:p-10 mt-10 md:mt-20 rounded-2xl">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-10">
          <img
            src={selectedBox.banner}
            alt={selectedBox.name}
            className="w-full lg:w-5/12 h-64 md:h-80 lg:h-96 rounded-xl object-cover"
          />

          <div>
            <h2 className="text-xl md:text-2xl font-bold mt-2 pb-4">{selectedBox.name}</h2>
            <p className="text-sm md:text-base">{selectedBox.description}</p>

            <div className="mt-4">
              <h1 className="font-semibold">Features:</h1>
              <ul className="list-disc ml-6 text-gray-700 text-sm md:text-base">
                {selectedBox.features?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <h1 className="font-semibold">Subscription Benefits:</h1>
              <ul className="list-disc ml-6 text-gray-700 text-sm md:text-base">
                {selectedBox.subscription_benefits?.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        
        <div className="flex justify-center mt-6">
          <button
            onClick={() => {
              if (subscribed) {
                toast.error('Already subscribed');
              } else {
                setSubscribed(true);
                setShowReviewSection(true);
                toast.success('Subscribed successfully!');

                
                const subscriptionData = {
                  id: selectedBox.id,
                  name: selectedBox.name,
                  thumbnail: selectedBox.thumbnail,
                  tech_category: selectedBox.tech_category,
                  description: selectedBox.description,
                };

                
                const storedSubscriptions =
                  JSON.parse(localStorage.getItem('mySubscriptions')) || [];

                const alreadyInStorage = storedSubscriptions.some(
                  (item) => item.id === selectedBox.id
                );

                if (!alreadyInStorage) {
                  storedSubscriptions.push(subscriptionData);
                  localStorage.setItem(
                    'mySubscriptions',
                    JSON.stringify(storedSubscriptions)
                  );
                }
              }
            }}
            className="btn btn-primary w-full sm:w-auto"
          >
            Subscribe Now
          </button>
        </div>

        
        {showReviewSection && (
  <div className="mt-10 bg-blue-100/60 border border-blue-200 rounded-xl p-6 shadow-inner backdrop-blur">
    <h1 className="font-semibold text-xl text-blue-900 mb-4">❄️ Share Your Cozy Thoughts</h1>

    <form onSubmit={handleReviewSubmit} className="space-y-4">
      <textarea
        placeholder="Write your review..."
        className="w-full rounded-lg border border-blue-300 p-3 focus:ring-2 focus:ring-blue-400 text-sm resize-none"
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        rows={4}
      ></textarea>

<div className='flex gap-10'>
      <input
        type="number"
        placeholder="Rating (1-5)"
        className="w-full sm:w-40 rounded-lg border border-blue-300 p-2 focus:ring-2 focus:ring-blue-400 text-sm"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        min="1"
        max="5"
      />

      <button
        type="submit"
        className="bg-blue-700 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 shadow-md"
      >
        Submit Review
      </button>
      </div>
    </form>

    <div className="mt-8">
      <h3 className="font-bold text-lg text-blue-800 mb-2">🧣 What Others Say:</h3>
      {reviews.length === 0 ? (
        <p className="text-sm text-gray-600 italic">No reviews yet. Be the first to warm us with your words!</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-white border border-blue-200 p-4 rounded-lg shadow-sm">
              <p className="text-gray-800 text-sm">{rev.text}</p>
              <p className="text-blue-600 text-xs mt-2">⭐ Rating: {rev.rating}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  </div>
)}

      </div>

      <div className="flex justify-center mt-6">
        <Link to="/">
          <button className="btn btn-primary w-full sm:w-auto">Back to Home</button>
        </Link>
      </div>

    </div>
  );
};

export default SubBoxCardDetails;
