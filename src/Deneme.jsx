import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AiFillCaretRight } from "react-icons/ai";
import teknisyen from './assets/img/kurumsal.jpg';

const Deneme = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <section id='hakkımızda' className='container brand-container'>
                <div className='row'>
                    <div className='brand-text-container d-flex flex-column col-md-6'>
                        <div className='brand-text-title' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                            <h2>Neden Bizi Tercih Etmelisiniz?</h2>
                        </div>
                        <div className='brand-text-big-title' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                            <h1>Elektrik Proje Hizmetlerimiz: Kalite ve Güvenin Adı</h1>
                        </div>
                        <div className='brand-text-paragraf' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                            <p>
                                Firmamız, elektrik projeleri alanında uzmanlaşmış bir ekip ile, AG ve OG enerji taleplerine yönelik hizmetler sunmaktadır. BEDAŞ ve AYEDAŞ gibi enerji dağıtım şirketlerine talep açma süreçlerinde, profesyonel yaklaşımımızla en yüksek standartları hedefliyoruz.
                            </p>
                        </div>
                        <div className='brand-claim-container'>
                            <div className='claim-1 d-flex' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                                <div className='d-flex flex-column'>
                                    <div className='d-flex flex-row'>
                                        <AiFillCaretRight className='brand-text-icons' />
                                        <h3 className='claim-title'>Uzmanlık ve Deneyim</h3>
                                    </div>
                                    <div>
                                        <p className='claim-text'>
                                            Elektrik tesisat kontrol raporlarımız ve topraklama raporlarımız, sektördeki en güncel standartlara uygun olarak hazırlanmakta, güvenilirliği ön planda tutmaktadır.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='claim-2 d-flex' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                                <div className='d-flex flex-column'>
                                    <div className='d-flex flex-row'>
                                        <AiFillCaretRight className='brand-text-icons' />
                                        <h3 className='claim-title'>Kaliteli Proje Yönetimi</h3>
                                    </div>
                                    <div>
                                        <p className='claim-text'>
                                            Her projede, detaylı planlama ve uygulama aşamalarında titizlikle çalışarak, zamanında ve bütçeye uygun sonuçlar elde ediyoruz.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='claim-3 d-flex' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                                <div className='d-flex flex-column'>
                                    <div className='d-flex flex-row'>
                                        <AiFillCaretRight className='brand-text-icons' />
                                        <h3 className='claim-title'>Güvenli Çözümler</h3>
                                    </div>
                                    <div>
                                        <p className='claim-text'>
                                            Müşteri memnuniyetini öncelikli hedef olarak belirleyerek, güvenli ve sağlam altyapılar inşa ediyoruz. Her adımda güvenlik standartlarına riayet ediyoruz.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 brand-img-container' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                        <img src={teknisyen} alt="Elektrik Proje Hizmetleri" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Deneme;
