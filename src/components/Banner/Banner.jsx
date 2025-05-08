import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img1 from '../../assets/pexels-thought-catalog-317580-2228554.jpg';
import img2 from '../../assets/pexels-adonyi-foto-19601419.jpg';
import img3 from '../../assets/pexels-felixmittermeier-957056.jpg';
import img4 from '../../assets/pexels-jill-wellington-1638660-461189.jpg';
import img5 from '../../assets/pexels-polesietoys-27642777.jpg';

const Banner = () => {
  const images = [img1, img2, img3, img4, img5];

  return (
    <div className="w-11/12 mx-auto h-[400px] md:h-[600px] lg:h-[800px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              className="w-full h-full object-cover rounded-lg"
              alt={`Slide ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;