import React, { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Helmet } from 'react-helmet';
import './styles.scss/slide.scss';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';




// resimler
import bedas from './assets/bedaş.png';
import services1 from './assets/img/Elektrik İç Tesisat Proje Çizimi.jpg';
import services2 from './assets/img/AraçSarjİstasyonları.jpg';
import services3 from './assets/img/topraklamaraporu.jpg';
import services4 from './assets/img/Güç Arttırım Projesi.jpg';
import services5 from './assets/img/Trafo Projelendirme & Onay.jpg';
import services6 from './assets/img/Ag ve Og enerji talepleri.jpg';
import galeri1 from './assets/galeri1.jpg';
import galeri2 from './assets/galeri2.jpg';
import galeri3 from './assets/galeri3.jpg';
import serviceshape from './assets/img/serviceshape.png';




const Services = () => {
    const [detailServiceActive, setDetailServiceActive] = useState(false)
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const detailService = () => {

    };

    return (
        <>
            <Helmet>

                <meta name="description" content="Elektrik İç Tesisat Proje Çizimi,Araç Sarj İstasyonları,Topraklama Ölçüm Raporu,Trafo Projelendirme & OnayAg ve Og enerji talepleri" />
                <meta name="keywords" content="Elektrik İç Tesisat Proje Çizimi,Araç Sarj İstasyonları,Topraklama Ölçüm Raporu,Trafo Projelendirme & OnayAg ve Og enerji talepleri" />
                <meta property="og:title" content="Elektrik İç Tesisat Proje Çizimi,Araç Sarj İstasyonları,Topraklama Ölçüm Raporu,Trafo Projelendirme & OnayAg ve Og enerji talepleri" />
                <meta property="og:description" content="Elektrik İç Tesisat Proje Çizimi,Araç Sarj İstasyonları,Topraklama Ölçüm Raporu,Trafo Projelendirme & OnayAg ve Og enerji talepleri" />
            </Helmet>
            <div className='container-fluid'>

                <div className='row'>
                    <div className='col-12 col-md-8  main-text-container'>
                        <h1 className='main-text'>
                            YETKİLİ ELEKTRİK & PROJE MUHENDİSLİĞİ
                        </h1>
                        <p className='mt-3'>

                            <strong>Elektrik Projeleri ve Enerji Çözümleri</strong><br />

                            Hizmetlerimiz
                            Elektrik altyapı projelerinizde uzman kadromuz ve deneyimimizle, Ag ve Og (Orta Gerilim ve Alçak Gerilim) enerji talepleri, topraklama raporları, elektrik tesisat kontrol raporları gibi önemli hizmetleri sunmaktayız. Ayrıca, BEDAŞ ve AYEDAŞ gibi dağıtım şirketlerine yönelik taleplerinizin takibi, projelendirilmesi ve onay süreçlerinde de hizmet vermekteyiz.
                        </p>
                        <button className='btn btn-light service-button'>
                            <a href='tel:+905313606918'
                            >
                                <i
                                    className="bi bi-telephone mx-2">
                                </i>
                                +90 531 360 69 18
                            </a>
                        </button>
                    </div>
                    <div className="col-12 col-md-4 ">
                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',
                            }}
                            spaceBetween={0}
                            navigation={false}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper-galeri"
                        >
                            <SwiperSlide>
                                <img src={galeri1} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={galeri2} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={galeri3} />
                            </SwiperSlide>

                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={5}
                            slidesPerView={3}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className="mySwiper-galeri-images"
                        >
                            <SwiperSlide>
                                <img src={galeri1} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={galeri2} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={galeri3} />
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </div >

            <section id='hizmetler' className='container services-container'>
                <div className='shape-service'>
                    <img src={serviceshape} />
                </div>
                <div
                    className='title'
                    data-aos="zoom-in"
                    data-aos-duration="300"
                    data-aos-delay="100"
                >
                    <h1 className='page-title'>
                        Enerji Dağıtım Projeleri
                    </h1>
                    <p className='title-description'>
                        Tesisat ve Mühendislik Hizmetleri
                    </p>
                </div>

                <div className="row custom-div-container">
                    <div
                        className={`col-12 col-md-4  first-img custom-div`}
                        data-aos="fade-up"
                        data-aos-duration="100"
                        data-aos-delay="100"
                    >
                        <div className='service-img-box'>
                            <img
                                src={services1}
                                alt="Elektrik İç Tesisat Proje Çizimi"
                            />
                        </div>
                        <div className='text-img-services '>
                            <i class="bi bi-pencil services-icons"></i> <h2>Elektrik İç Tesisat Proje Çizimi</h2>
                        </div>

                    </div>

                    <div
                        className="col-12 col-md-4 custom-div"
                        data-aos="fade-up"
                        data-aos-duration="100"
                        data-aos-delay="100"
                    >
                        <div className='service-img-box'>
                            <img
                                src={services2}
                                alt="Araç Sarj İstaysonu Proje"
                            /></div>
                        <div className='text-img-services'>
                            <i class="bi bi-ev-front services-icons"></i> <h2>Araç Sarj İstasyonları</h2>
                        </div>
                    </div>

                    <div
                        className="col-12 mb-3 col-md-4 custom-div"
                        data-aos="fade-up"
                        data-aos-duration="100"
                        data-aos-delay="100"
                    >
                        <div className='service-img-box'>
                            <img
                                src={services3}
                                alt="Topraklama Ölçüm Raporu"
                            />
                        </div>
                        <div className='text-img-services'>
                            <i class="bi bi-paperclip services-icons"></i> <h2>Topraklama Ölçüm Raporu</h2>
                        </div>
                    </div>
                    <div
                        className="col-12 mb-3 col-md-4  custom-div"
                        data-aos="fade-up"
                        data-aos-duration="100"
                        data-aos-delay="100"
                    >
                        <div className='service-img-box'>
                            <img
                                src={services4}
                                alt="Güç Arttırım Projesi"
                            />
                        </div>
                        <div className='text-img-services'>
                            <i class="bi bi-battery-charging services-icons"></i>  <h2>Güç Arttırım Projesi</h2>
                        </div>
                    </div>

                    <div
                        className="col-12 mb-3 col-md-4   custom-div"
                        data-aos="fade-up"
                        data-aos-duration="100"
                        data-aos-delay="100"
                    >
                        <div className='service-img-box'>
                            <img
                                src={services5}
                                alt="Trafo Projelendirme & Onay"
                            />
                        </div>
                        <div className='text-img-services'>
                            <i class="bi bi-bookmark-check services-icons"></i> <h2>Trafo Projelendirme & Onay</h2>
                        </div>
                    </div>

                    <div
                        className="col-12 mb-3 col-md-4  custom-div"
                        data-aos="fade-up"
                        data-aos-duration="100"
                        data-aos-delay="100"
                    >
                        <div className='service-img-box'>
                            <img
                                src={services6}
                                alt="jenaratör Proje Ve Ruhsatlandırma"
                            />
                        </div>
                        <div className='text-img-services'>
                            <i class="bi bi-activity services-icons"></i>  <h2>Ag ve Og enerji talepleri</h2>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
};

export default Services;
