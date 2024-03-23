import { NavLink } from 'react-router-dom';
import { Autoplay, Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import camp1 from '../../images/swipes/camp1.jpg';
import camp2 from '../../images/swipes/camp2.jpg';
import camp3 from '../../images/swipes/camp3.jpg';

import css from './Swipe.module.css';

const Swipe = () => {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className={css.slide_wrap}>
          <img className={css.slide_img} src={camp1} alt="Our best camper" />
          <div className={css.slide_description}>
            <h2>Your best choice</h2>
            <p>We are expert in camper rental</p>
            <NavLink to="/catalog">Rent camper</NavLink>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={css.slide_wrap}>
          <img className={css.slide_img} src={camp2} alt="Our best camper" />
          <div className={css.slide_description}>
            <h2>Best Journey</h2>
            <p>We make your drive memorable</p>
            <NavLink to="/catalog">Rent camper</NavLink>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={css.slide_wrap}>
          <img className={css.slide_img} src={camp3} alt="Our best camper" />
          <div className={css.slide_description}>
            <h2>Best Prices</h2>
            <p>Enjoy your holidays with us</p>
            <NavLink to="/catalog">Rent camper</NavLink>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Swipe;
