import { useRef } from 'react';
import './Banner.css';
import bgVideo1 from '../../assets/travel1.mp4';
import bgVideo2 from '../../assets/travel2.mp4';
import bgVideo3 from '../../assets/travel3.mp4';
import bgVideo4 from '../../assets/travel4.mp4';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Swiper Modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <div className='h-screen slider'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="relative h-full w-full">
                        <video src={bgVideo1} autoPlay loop muted className="object-cover h-full w-full" />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-6 md:px-12">
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">Discover the World with Travelguru</h1>
                            <p className="text-base md:text-xl lg:text-2xl mb-6">Your Gateway to Unforgettable Adventures – 20% Off!</p>
                            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 md:py-3 md:px-8 rounded-lg transition duration-300">
                                Book Now
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative h-full w-full">
                        <video src={bgVideo2} autoPlay loop muted className="object-cover h-full w-full" />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-6 md:px-12">
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">Explore Hidden Gems Across the Globe</h1>
                            <p className="text-base md:text-xl lg:text-2xl mb-6">Ultimate Getaways with a 20% Discount</p>
                            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 md:py-3 md:px-8 rounded-lg transition duration-300">
                                Book Now
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative h-full w-full">
                        <video src={bgVideo3} autoPlay loop muted className="object-cover h-full w-full" />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-6 md:px-12">
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">Experience Travel Like Never Before</h1>
                            <p className="text-base md:text-xl lg:text-2xl mb-6">Personalized Journeys – Now 20% Off!</p>
                            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 md:py-3 md:px-8 rounded-lg transition duration-300">
                                Book Now
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative h-full w-full">
                        <video src={bgVideo4} autoPlay loop muted className="object-cover h-full w-full" />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white px-6 md:px-12">
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">Escape to Paradise with Travelguru</h1>
                            <p className="text-base md:text-xl lg:text-2xl mb-6">Tailored Travel Packages – Now with 20% Off!</p>
                            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 md:py-3 md:px-8 rounded-lg transition duration-300">
                                Book Now
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

                <div className="autoplay-progress absolute bottom-8" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
};

export default Banner;
