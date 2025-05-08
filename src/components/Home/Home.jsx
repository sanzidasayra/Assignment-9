import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import SubBoxes from '../SubscribtionBox/SubBoxes';
import CustomerReview from '../CustomerReview/CustomerReview';
import HowWork from '../HowWork/HowWork';

const Home = () => {
  const [boxes, setBoxes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBoxes = async () => {
      try {
        const response = await fetch('/icenest_boxes.json');
        if (!response.ok) {
          throw new Error('Failed to fetch subscription boxes');
        }
        const data = await response.json();
        setBoxes(data);
      } catch (error) {
        console.error('Error fetching boxes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBoxes();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Home | IceNest</title>
      </Helmet>

      <Banner />
      {loading ? (
        <p className="text-center py-10 text-lg">Loading subscription boxes...</p>
      ) : (
        <SubBoxes boxes={boxes} />
      )}
      <CustomerReview></CustomerReview>
      <HowWork></HowWork>
    </div>
  );
};

export default Home;
