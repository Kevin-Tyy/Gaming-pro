import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const posterSlider = ({ screenShots }) => {
	const Posters = [];
	for (let i = 0; i < screenShots.length; i++) {
		Posters.push(screenShots[i].image);
	}
	return (
		<div className="w-full mt-10 p-4 lg:p-10">
			<Swiper
				spaceBetween={20}
				slidesPerView={1}
				autoplay={{ delay: 3000 }}
				breakpoints={{
					500 : {
						slidesPerView :1 
					},
					768: {
					  slidesPerView: 2,
					  spaceBetween: 40,
					},
					1024 :{
						slidesPerView : 3,
						spaceBetween: 45,
					},
					1500: {
					  slidesPerView: 4,
					  spaceBetween: 50,
					}
				  }}>
					<div className="flex justify-center">
						{Posters.map((imageUrl, index) => (
							<SwiperSlide key={index}>
								<img src={imageUrl} alt={`slide-${index}`} className="h-72 object-cover"/> 
							</SwiperSlide>
						))}

					</div>
			</Swiper>
		</div>
	);
};

export default posterSlider;
