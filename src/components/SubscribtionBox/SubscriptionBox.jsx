import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const SubscriptionBox = ({ singleSubscriptionBox }) => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/subscriptiondetails/${id}`);
  };
  
  const {
    id,
    name,
    thumbnail,
    tech_category,
    frequency,
    price,
    description,
    ratings,
    number_of_reviews
  } = singleSubscriptionBox;


  


  return (
    <div className="w-11/12 md:w-10/12 mx-auto md:bg-white shadow-2xl rounded-2xl p-4 md:p-6 hover:shadow-lg transition duration-300">
      <img
        src={thumbnail}
        alt={name}
        className="w-full h-48 md:h-64 lg:h-72 object-cover rounded-xl"
      />

      <div className="mt-4">
        <div className="flex flex-col md:flex-row md:justify-between gap-2">
          <h2 className="text-lg md:text-xl font-semibold">{name}</h2>
          <button className="btn bg-pink-400 text-white rounded-3xl text-sm px-4 py-1">
            {tech_category}
          </button>
        </div>

        <p className="text-gray-600 mt-2 text-sm md:text-base">
          {description.slice(0, 100)}...
        </p>

        
        <div className="flex  items-start mt-4 gap-2 lg:flex-row lg:justify-between lg:items-center">
          <span className="text-[#3ABFF8] bg-blue-50 px-3 py-1 rounded-2xl font-bold text-sm md:text-base">
            {frequency}: ${price}
          </span>
          <div className="text-[#3ABFF8] text-sm flex gap-1 items-center">
            <span className="text-yellow-400">
              <FaStar />
            </span>
            {ratings} ({number_of_reviews})
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <button
            onClick={handleNavigation}
            className="btn w-full sm:w-auto px-4 py-2 btn-outline btn-info rounded-3xl hover:text-white text-sm md:text-base"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionBox;
