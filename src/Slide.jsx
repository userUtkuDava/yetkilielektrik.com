import React, { useEffect } from 'react';
import İnfoHead from './İnfohead';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'; // Add autoplay style import
// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
// import resimler 
import slideİmg1 from './assets/img/banner1.jpg';
import slideİmg2 from './assets/img/banner2.jpg';
import slideİmg3 from './assets/img/banner3.jpg';
import slideİmg4 from './assets/img/banner4.jpg';

const Slide = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <Swiper
                navigation={true}
                modules={[Navigation, Autoplay]} // Add Autoplay to the modules
                className="mySwiper-main"
                autoplay={{
                    delay: 6000, // Time between slides in ms (3000ms = 3 seconds)
                    disableOnInteraction: false, // Keeps autoplay going even after user interacts with the slides
                }}
                speed={1000}
            >
                <SwiperSlide>
                    <section className='slide-description-content' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                        <h1>Yetkili elektrik<br /> <span className='text'>fen adamı</span></h1>
                        <p>Teknik yetkinlik gerektiren süreçlerde görev alarak ve enerjinin hatasız ve sistematik şekilde kullanıcıya gitmesini sağlamaktayız.</p>
                    </section>
                    <img className='slide-img' src={slideİmg1} alt='Yetkili elektrik fen adamı' />
                </SwiperSlide>
                <SwiperSlide>
                    <section className='slide-description-content'>
                        <h1>Elektrik proje<br /> <span className='text'>Yönetimi</span></h1>
                        <p>Biz, <strong>Yetkili Elektrik</strong> olarak elektrik proje yönetiminde uzmanlaşmış bir firmayız. Elektrik altyapı ve sistem projelerinde yüksek kaliteyi hedefliyoruz.</p>

                    </section>
                    <img className='slide-img' src={slideİmg2} alt='Elektrik proje yönetimi' />
                </SwiperSlide>
                <SwiperSlide>
                    <section className='slide-description-content' >
                        <h1>Topraklama <br /> <span className='text'>raporu</span></h1>
                        <p> 
                            <strong> Bakanlık Onaylı Ekipnet Belgeli Elektrik İç tesisat Uygunguluk Kontrolü ve Topraklama Ölçümü Hizmetleri </strong>

                        </p>

                    </section>
                    <img className='slide-img' src={slideİmg3} alt='OG ve AG enerji talepleri' />
                </SwiperSlide>
                <SwiperSlide>
                    <section className='slide-description-content'>
                        <h1>OG ve AG  <br /> <span className='text'>enerji talepleri</span></h1>
                        <p>OG ve AG enerji talepleri konusunda uzmanlaşmış bir firmayız. Enerji altyapılarının planlama, tasarım ve yönetimi alanında geniş deneyime sahibiz. Projelerinizin enerji ihtiyacını doğru belirleyerek, güvenli ve verimli çözümler sunuyoruz.</p>

                    </section>
                    <img className='slide-img' src={slideİmg4} />
                </SwiperSlide>
            </Swiper >
            <İnfoHead />
        </>
    );
}

export default Slide;
