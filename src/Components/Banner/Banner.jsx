import { useRef } from 'react';
import './Banner.css';
import bgVideo1 from '../../assets/travel1.mp4'
import bgVideo2 from '../../assets/travel2.mp4'
import bgVideo3 from '../../assets/travel3.mp4'
import bgVideo4 from '../../assets/travel4.mp4'


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
                <div>
                    <SwiperSlide>
                        <h1 className='text_content'>Whats up?</h1>
                        {/* <img src={banner1} alt="" /> */}
                        <video src={bgVideo1} autoPlay loop muted></video>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1 className='text_content'>Hello</h1>
                        {/* <img src={banner2} alt="" /> */}
                        <video src={bgVideo2} autoPlay loop muted></video>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1 className='text_content'>Hi</h1>
                        {/* <img src={banner3} alt="" /> */}
                        <video src={bgVideo3} autoPlay loop muted></video>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h1 className='text_content'>Hi</h1>
                        {/* <img src={banner3} alt="" /> */}
                        <video src={bgVideo4} autoPlay loop muted></video>
                    </SwiperSlide>
                </div>

                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
                <div className="text-content">
                    <h1 className='text-2xl'>Welcome To TravelGuru</h1>
                </div>
            </Swiper>

        </div>
    );
}
export default Banner
