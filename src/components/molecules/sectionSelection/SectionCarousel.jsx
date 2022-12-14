import { Swiper, SwiperSlide } from 'swiper/react';
import { ReactComponent as ListIcon } from './list-icon.svg';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './SectionCarousel.scss';
import { useEffect, useState } from 'react';

export function SectionCarousel({ titles, carouselClassName, currentSection }) {
  const [swiperRef, setSwiperRef] = useState(null);

  const currentSelectedIndex = titles.findIndex(
    (title) => title === currentSection
  );

  function scrollTo(elementId) {
    var element = document.getElementById(elementId);
    var headerOffset = 150;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    if (!swiperRef) return;
    swiperRef.slideTo(currentSelectedIndex, 400);
  }, [currentSelectedIndex, swiperRef]);

  return (
    <div className={'section-carousel ' + carouselClassName}>
      <ListIcon style={{ cursor: 'pointer' }} />
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView="auto"
        spaceBetween={20}
        centeredSlides={false}
      >
        {titles.map((title) => (
          <SwiperSlide
            key={title}
            onClick={() => scrollTo(title)}
            active={Boolean(currentSection === title).toString()}
          >
            {title}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
