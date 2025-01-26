import React from 'react'
import './styles.scss/slide.scss'
const İnfohead = () => {
    return (

        <div className='social-media-content'>

            <div className='social-media-item col-md-2'>
                <a href="https://wa.me/905313606918" target='_blank'>
                    <i className="bi bi-whatsapp social-icons">
                    </i>
                </a>
            </div>
            <div className='social-media-item col-md-2 px-2'>
                <a href="tel:+905313606918"><i className="bi bi-telephone social-icons"></i>
                </a>
            </div>
            <div className=' social-media-item col-md-2 px-2'>
                <a href="mailto:yetkilielektrik.com" target='_blank'><i className="bi bi-envelope social-icons"></i>

                </a>
            </div>
            <div className='social-media-item col-md-2 px-2'>
                <a href="https://www.instagram.com/yetkilielektrik/"
                    target='_blank'><i className="bi bi-instagram social-icons"></i>

                </a>
            </div>

        </div>

    )
}

export default İnfohead