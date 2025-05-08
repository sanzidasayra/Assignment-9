import React, { Suspense, useState } from 'react';
import SubBox from './SubBox';

const SubBoxes = ({ boxes = [] }) => {
  const [showAllSubBoxes, setShowAllSubBoxes] = useState(false);

  const visibleSubBoxes = Array.isArray(boxes)
    ? showAllSubBoxes
      ? boxes
      : boxes.slice(0, 6)
    : [];

  return (
    <div className="px-4 sm:px-6 lg:px-20 py-10">
      <h1 className="font-extrabold text-2xl md:text-3xl lg:text-4xl text-center pt-8">
        Explore Our Winter Subscription Boxes
      </h1>

      <p className="text-sm md:text-base text-center mt-4 lg:mt-6 max-w-4xl mx-auto text-gray-700 dark:text-gray-300">
        Explore our curated winter subscription boxes, each filled with handpicked seasonal items to bring warmth, joy, and festive cheer. Whether you crave comfort, adventure, or holiday magic, there’s a box crafted just for you. Unbox happiness and make your winter moments truly special.
      </p>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-blue-50 dark:bg-gray-900 shadow-lg dark:shadow-xl rounded-3xl mt-10 p-6 md:p-8 lg:p-10">
        <Suspense fallback={<div className="text-center text-blue-500">Loading...</div>}>
          {visibleSubBoxes.map((singleSubscriptionBox) => (
            <SubBox key={singleSubscriptionBox.id} singleSubscriptionBox={singleSubscriptionBox} />
          ))}
        </Suspense>
      </div>

      {Array.isArray(boxes) && boxes.length > 6 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAllSubBoxes(!showAllSubBoxes)}
            className="py-3 px-6 md:py-4 md:px-8 rounded-full bg-[#176AE5] text-white font-semibold text-base md:text-lg hover:bg-[#145ac1] transition duration-300"
          >
            {showAllSubBoxes ? 'Show Less' : 'View All Boxes'}
          </button>
        </div>
      )}
    </div>
  );
};

export default SubBoxes;
