import React from 'react';
import './Contact.scss';

const Contact = () => {
    return (
        <div className='contact' id='contact'>
            <div className='contact-wrapper'>
                <h2 className='title'>Contact me</h2>
                <div className='d-flex'>
                    <div className='address-info'>
                        <a href="https://www.google.com/maps/search/%2312,+4th+block,+5th+main,+goraguntepalya,+bangalore-560022/@12.9736538,77.5198611,13z/data=!3m1!4b1?entry=ttu" rel="noopener nofollow noreferrer" target="_blank" type="location" className='d-flex'>
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 571.4 1000"><path fill="currentColor" d="M429 357q0-59-42-101t-101-42-101 42-42 101 42 101 101 42 101-42 42-101zm142 0q0 61-18 100L350 889q-9 18-27 29t-37 11-38-11-26-29L18 457Q0 418 0 357q0-118 84-202t202-84 202 84 83 202z"></path></svg>
                            </i>
                            <div className='col-md-10 text-white'>
                                <div>No 12</div>
                                <div>4th block</div>
                                <div>5th main</div>
                                <div>Goraguntepalya</div>
                                <div>Doddanekundi</div>
                                <div>Bengaluru</div>
                                <div>Karnataka</div>
                                <div>560022</div>
                            </div>
                        </a>
                    </div>
                    <div className='mail-info'>
                        <a rel="noopener nofollow noreferrer" target="_blank" href="mailto:swamyskitchen2010@gmail.com">
                            <i>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                                    <path fill="currentColor" d="M1000 396v443q0 37-26 63t-63 27H89q-36 0-63-27T0 839V396q25 27 56 49 202 137 278 192 32 24 51 37t53 27 61 13h2q28 0 61-13t53-27 51-37q95-68 278-192 32-22 56-49zm0-164q0 44-27 84t-68 69Q695 531 643 566q-5 4-23 17t-30 22-29 18-32 15-28 5h-2q-12 0-27-5t-32-15-30-18-30-22-23-17q-51-35-147-101T96 385q-35-23-65-64T0 244q0-43 23-72t66-29h822q36 0 63 26t26 63z">
                                    </path>
                                </svg>
                            </i>
                            <span>maniiyercatering@gmail.com</span>
                        </a>
                        <div className='text-white mt-4'>
                            Contact No: 081975 80019
                        </div>
                        <a className="whatsapp-link" href="https://api.whatsapp.com/send/?phone=%2B916382984747&text&type=phone_number&app_absent=0">
                            <img alt="" className="x193iq5w xxymvpz" referrerPolicy="origin-when-cross-origin" src="https://scontent-mxp1-1.xx.fbcdn.net/v/t39.8562-6/302545850_624095499080233_2353782457618232690_n.png?_nc_cat=106&amp;ccb=1-7&amp;_nc_sid=f537c7&amp;_nc_ohc=OOLnWI6VuZQAX8lYOZK&amp;_nc_ht=scontent-mxp1-1.xx&amp;oh=00_AfAhlszHjxi4Ax6DOr9MpDVLtzUzNHDVZ0vCqwfbTWLI9w&amp;oe=65347AAC"></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;