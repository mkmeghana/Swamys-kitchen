import React from 'react';
import './About.scss';

const About = () => {
    return (
        <div className='about container-fluid' id="about_us">
            <h2 className='title'>About me</h2>
            <div className='row'>
                <div className='col-md-5 col-sm-12 d-flex flex-column justify-content-center align-items-center'>
                    <h3 className='subtitle'>Top-Notch Tamil Brahmin Food Delivery</h3>
                    <p>Looking for a tasty meal delivered straight to your door? Mani Iyer'S Kitchen is here to bring you outstanding dishes– where you want them, and when you want them. Whenever you find yourself short on time to cook for yourself or you haven’t had the chance to swing by the shop, get in touch with us and we’ll deliver something outstanding to your home or workplace. Get in touch to place an order online.</p>
                </div>
                <div className='col-md-7 col-sm-12'>
                    <img className="image" src="https://speedy.uenicdn.com/76750bf6-6aec-40b3-b015-71d90063bada/c1344_500a/image/upload/v1560833788/business/76750bf6-6aec-40b3-b015-71d90063bada/Screenshot-2019-06-18-10-19-00-070-comwhatsapppng.jpg" />
                </div>
            </div>
            <div className='row'>
                <div className='col-md-7 col-sm-12'>
                    <img className="image" src="https://speedy.uenicdn.com/76750bf6-6aec-40b3-b015-71d90063bada/c1344_500a/image/upload/v1560833797/business/76750bf6-6aec-40b3-b015-71d90063bada/Screenshot-2019-06-18-10-19-50-831-comwhatsapppng.jpg" />
                </div>
                <div className='col-md-5 col-sm-12 d-flex flex-column justify-content-center align-items-center'>
                    <h3 className='subtitle'>Classic Recipes & Amazing Taste</h3>
                    <p>I pride myself on cooking outstanding dishes that will treat your tongue to all sorts of delights. There’s nothing quite like a traditional meal that’s been freshly cooked on the day for you. I also offer a variety of foods throughout the week, so you won’t end up eating the same thing if you order more than once in a short period of time.</p>
                </div>
              
            </div>
            <div className='row'>
                <div className='col-md-5 col-sm-12  d-flex flex-column justify-content-center align-items-center'>
                    <h3 className='subtitle'>Cooking For You With Pride</h3>
                    <p>We know just what our customers are looking for and craft our cooking to tempt and excite your taste buds. From the moment of giving in your order, to the point when you collect your meal, we aim to please with a range of affordable dishes that don’t compromise on flavour or quality, we think you’ll agree.</p>
                </div>
                <div className='col-md-7 col-sm-12'>
                    <img className="image" src="https://speedy.uenicdn.com/76750bf6-6aec-40b3-b015-71d90063bada/c1344_500a/image/upload/v1560833792/business/76750bf6-6aec-40b3-b015-71d90063bada/Poori-Masala-Recipe--How-to-make-Aloo-Poori-Masala-Recipejpeg.jpg" />
                </div>
            </div>
        </div>
    )
}

export default About;