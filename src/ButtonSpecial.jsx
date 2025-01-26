import React from 'react'
import './styles.scss/button.scss'
import { useState } from 'react'
const ButtonSpecial = () => {
    const [buttonText, setButtonText] = useState("YETKİLİ ELEKTRİK")
    const handleMouseEnter = () => {
        setButtonText('HEMEN BİZİ ARAYIN')
    }
    const handleMouseLeave = () => {
        setButtonText('YETKİLİ ELEKTRİK')
    }
    const handleClick = () => {
        window.location.href = 'tel:+905313606918';
    };

    return (
        <>
            <button
                className='special-button'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
            >
                {buttonText}
            </button>

        </>
    )
}

export default ButtonSpecial
