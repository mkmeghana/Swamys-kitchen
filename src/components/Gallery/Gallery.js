import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Gallery.scss';

const Gallery = () => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <div className='gallery' id="gallery">
            <h2 className='title'>Gallery</h2>
            <div className='gallery-wrapper'>
                <Slider {...settings}>
                    <div><img src="https://speedy.uenicdn.com/76750bf6-6aec-40b3-b015-71d90063bada/c266_180a/image/upload/v1560833807/business/76750bf6-6aec-40b3-b015-71d90063bada/Screenshot-2019-06-18-10-19-40-600-comwhatsapppng.jpg"/></div>
                    <div><img src="https://speedy.uenicdn.com/76750bf6-6aec-40b3-b015-71d90063bada/c266_180a/image/upload/v1560833792/business/76750bf6-6aec-40b3-b015-71d90063bada/Poori-Masala-Recipe--How-to-make-Aloo-Poori-Masala-Recipejpeg.jpg" /></div>
                    <div><img src="https://speedy.uenicdn.com/76750bf6-6aec-40b3-b015-71d90063bada/c266_180a/image/upload/v1560833802/business/76750bf6-6aec-40b3-b015-71d90063bada/Screenshot-2019-06-18-10-19-37-627-comwhatsapppng.jpg"/></div>
                    <div><img src="https://speedy.uenicdn.com/76750bf6-6aec-40b3-b015-71d90063bada/c266_180a/image/upload/v1560833797/business/76750bf6-6aec-40b3-b015-71d90063bada/Screenshot-2019-06-18-10-19-50-831-comwhatsapppng.jpg"/></div>
                    <div><img src="https://speedy.uenicdn.com/76750bf6-6aec-40b3-b015-71d90063bada/c266_180a/image/upload/v1560833820/business/76750bf6-6aec-40b3-b015-71d90063bada/Screenshot-2019-06-18-10-19-25-523-comwhatsapppng.jpg" /></div>
                    <div><img src="https://speedy.uenicdn.com/76750bf6-6aec-40b3-b015-71d90063bada/c266_180a/image/upload/v1560833816/business/76750bf6-6aec-40b3-b015-71d90063bada/Screenshot-2019-06-18-10-19-46-525-comwhatsapppng.jpg" /></div>
                    <div><img src="https://speedy.uenicdn.com/76750bf6-6aec-40b3-b015-71d90063bada/c266_180a/image/upload/v1560833812/business/76750bf6-6aec-40b3-b015-71d90063bada/Screenshot-2019-06-18-10-19-53-898-comwhatsapppng.jpg" /></div>
                </Slider>
            </div>
        </div>
    )
}

export default Gallery;