import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
// import { Autoplay } from "swiper"

// Swiper.use([Autoplay]);
const Companies: React.FC = () => {
  return (
    <section className="companies py-5">
    <div className="shirketlerKaruseli container">
      <Swiper

      
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}

        breakpoints={{
          768: {
            slidesPerView: 4, 
            spaceBetween: 50,
          },

          320: {
            slidesPerView: 1, 
            spaceBetween: 50,
          }

        }}
      
      >
        <SwiperSlide>
          <img
            src="https://colorlib.com/wp/wp-content/uploads/sites/2/eiser-free-template-1.jpg.avif"
            alt="Company 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://preview.colorlib.com/theme/aroma/img/blog/blog3.png"
            alt="Company 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://colorlib.com/wp/wp-content/uploads/sites/2/responsive-ecommerce-wordpress-themes.jpg.avif"
            alt="Company 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://preview.colorlib.com/theme/aroma/img/blog/blog2.png"
            alt="Company 4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://preview.colorlib.com/theme/aroma/img/blog/blog1.png"
            alt="Company 5"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://preview.colorlib.com/theme/eiser/img/b1.jpg"
            alt="Company 6"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2019/10/h81.jpg"
            alt="Company 7"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
  )
}

export default Companies