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
      <Navbar />

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
          <div className="mt-8">
            <h1 className="font-semibold text-lg">Leave a Review</h1>
            <textarea
              placeholder="Write your review here"
              className="w-full md:w-8/12 border p-2 mt-2"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            ></textarea>

            <input
              className="w-full md:w-4/12 p-2 mt-2"
              type="number"
              placeholder="Rating (1-5)"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />

            <button
              onClick={handleReviewSubmit}
              className="btn btn-primary mt-2 w-full sm:w-auto"
            >
              Submit
            </button>

            <div className="mt-6">
              <h3 className="font-bold text-base md:text-lg">User Reviews:</h3>
              {reviews.length === 0 ? (
                <p>No reviews yet.</p>
              ) : (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {reviews.map((rev, i) => (
                    <div key={i} className="border p-3 rounded bg-white">
                      <p className="text-sm md:text-base">{rev.text}</p>
                      <p className="text-xs text-gray-500">Rating: {rev.rating}</p>
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

      <Footer />
    </div>
  );
};

export default SubBoxCardDetails;
