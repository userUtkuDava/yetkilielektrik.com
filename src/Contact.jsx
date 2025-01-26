import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [visibility, setVisibility] = useState('d-none');
    const [formData, setFormData] = useState({
        from_name: '',
        email: '',
        konu: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    // Form verisini güncelleme
    const handleChange = (e) => {
        const { name, value } = e.target; // 'name' özelliğini kullanarak
        setFormData(prevData => ({
            ...prevData,
            [name]: value // Dinamik olarak formData'yı güncelle
        }));
    };

    // Formu gönderme
    const handleSubmit = (e) => {
        e.preventDefault();

        // EmailJS ile e-posta gönder
        emailjs.sendForm(
            'service_hq17cai',  // EmailJS servis ID'nizi buraya yazın
            'template_8149fvq',  // EmailJS şablon ID'nizi buraya yazın
            e.target,
            'GxNjrXGnfyQOvCuVO'  // EmailJS kullanıcı ID'nizi buraya yazın
        )
            .then((result) => {
                setStatus('Mesajınız başarıyla gönderildi!');
                setFormData({ from_name: '', email: '', konu: '', message: '' });
                setVisibility('visibility')
                document.getElementById('alertMessage').innerHTML = `
                 <div className="flex flex-column items-center">
                    <p>İletiniz Alındı Kısa Sürede Geri Dönüş Yapılacaktır.</p>
                 </div>
                `
                setTimeout(() => {
                    setVisibility('d-none')
                }, 10000); // 3 saniye bekler
            }, (error) => {
                setStatus('Bir hata oluştu.');
            });
    };

    return (
        <section id='iletisim' className='container contact-container' >
            <div className='title'>
                <h1 className='page-title'>
                    Bizimle İletişime Geçin
                </h1>
                <p className='col-12 title-description'>
                    Sorularınız, projeleriniz veya işbirlikleri için bizimle iletişime geçebilirsiniz.
                </p>
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <div className="wrapper">
                            <div className="row  contact-info-box">
                                {/* İletişim Bilgileri */}
                                <div className="col-md-3">
                                    <div className="dbox w-100 text-center">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="bi bi-geo-alt" ></span>
                                        </div>
                                        <div className="text">
                                            <p><span>Adres:</span> Göztepe Mah. Batışehir Cad. Batışehir K Blok No:2/2  D:115 <br />
                                                Bağcılar / İstanbul</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="dbox w-100 text-center">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="bi bi-phone"></span>
                                        </div>
                                        <div className="text">
                                            <p><span>Telefon:</span> <a href="tel:+905313606918">+90 531 360 69 18 </a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="dbox w-100 text-center">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="bi bi-envelope"></span>
                                        </div>
                                        <div className="text">
                                            <p><span>Email:</span> <a href="mailto:yetkilielektrik.com" target='_blank'>yetkilielektrik.com</a></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="dbox w-100 text-center">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="bi bi-whatsapp"></span>
                                        </div>
                                        <div className="text">
                                            <p><span>Whatsapp:</span><a href="https://wa.me/905313606918" target='_blank'> Whatsapp'dan İlet</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row no-gutters">
                                <div className="col-md-7">
                                    <div className="contact-wrap w-100 p-md-5 p-4">
                                        <h3 className="mb-4">Mesajını İlet</h3>
                                        <form id="email-form" onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="label" htmlFor="name">İsim</label>
                                                        <input
                                                            className='form-control'
                                                            onChange={handleChange}
                                                            type="text"
                                                            name="from_name"
                                                            id="from_name"
                                                            placeholder="Adınız"
                                                            value={formData.from_name} // Form verisini burada bağla
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label className="label" htmlFor="email">Email Adresi</label>
                                                        <input
                                                            className='form-control'
                                                            onChange={handleChange}
                                                            type="email"
                                                            name="email"
                                                            id="email"
                                                            placeholder="E-posta"
                                                            value={formData.email} // Form verisini burada bağla
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label className="label" htmlFor="subject">Konu</label>
                                                        <input
                                                            className='form-control'
                                                            onChange={handleChange}
                                                            type="text"
                                                            name="konu"
                                                            id="konu"
                                                            placeholder="Açıklama"
                                                            value={formData.konu} // Form verisini burada bağla
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label className="label" htmlFor="message">İleti</label>
                                                        <textarea
                                                            name="message"
                                                            onChange={handleChange}
                                                            className="form-control"
                                                            id="message"
                                                            cols="30"
                                                            rows="4"
                                                            placeholder="Mesajınızı Giriniz"
                                                            value={formData.message} // Form verisini burada bağla
                                                        ></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <button className="btn btn-primary" type="submit">Gönder</button>
                                                        <p id='alertMessage' className={`${visibility} text-yellow-700 font-medium text-base bg-gray-200 text-center p-3 rounded mb-4 shadow-sm`}></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                {/* Google Map iframe */}
                                <div className="col-md-5 d-flex align-items-stretch">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d96264.02356981447!2d28.75954256524067!3d41.063511552724975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x14caa55c0d1f14bd%3A0x8079c776424e0f59!2zR8O2enRlcGUsIEdvenRlcGUgbWFoZWxsYXNpIGJhdGlzZWhpciwgxLBzdGlrbGFsIENkLiwgMzQxMDAgS8O8w6fDvGvDp2VrbWVjZS_EsHN0YW5idWw!3m2!1d41.0635409!2d28.841943399999998!5e0!3m2!1str!2str!4v1731169617622!5m2!1str!2str" width="600" height="470" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Contact;
