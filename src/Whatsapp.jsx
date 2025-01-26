import React from 'react'
import { Helmet } from 'react-helmet';
const Whatsapp = () => {
    return (
        <>
            <Helmet>

                <meta name="description" content="Yetkili Elektrik irtibat" />
                <meta name="keywords" content="Yetkili Elektrik whatsapp" />
                <meta property="og:title" content="Yetkili Elektrik " />
                <meta property="og:description" content="yetkili elektrik iletişim" />
            </Helmet>
            <div className='container-fluid whatsapp-info-container position-sticky top-0'>
                <div className='row'>
                    <div className='col-12'>
                        <a href="https://wa.me/905313606918" target='_blank'>
                            <i class="bi bi-whatsapp"></i> Whatsapp
                        </a>
                        <a href="tel:+905313606918">
                            <i class="bi bi-telephone-plus" id='special-icon-head'></i> +90 531 360 69 18
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Whatsapp