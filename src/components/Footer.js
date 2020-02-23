import React from 'react';
import linkedIn from '../image/linkedin.png';
import telegram from '../image/telegram.png';
import social from '../image/social.png';
import twitter from '../image/twitter.png'

export const Footer = () => {

  return (
    <section className="footer text-white bg-gradient-blue ">
      <div className="row">
        <div className="col-md-4">
          <div className="pr-5 mr-5">
            <h2 className="fw-600">DA</h2>
            <p className="text-justify">Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
             Ut eu est et ipsum molestie dapibus.
              Integer ac convallis sem,
                               ut cursus neque. Proin vel nulla mi.</p>
          </div>
        </div>

        <div className="col-md-8">
          <div className="row">
            <div className="col-md-3">
              <div className="p-3">
                <h4 className="fw-600">Contact Us</h4>
                <p className="text-justify">+91 9865328965</p>
                <p className="text-justify">avanibataviya@gmail.com</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3">
                <h4 className="fw-600">About Us</h4>
                <p className="text-justify">Patner Help</p>
                <p className="text-justify">Carrers</p>
                <p className="text-justify">Press Center </p>
                <p className="text-justify">Inventor Relation</p>
                <p className="text-justify">Terms & Service</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-3">
                <h4 className="fw-600">Landon Office</h4>
                <p className="text-justify">17 Landon Road</p>
                <p className="text-justify">Kingstone Upon, KT441</p>
                <p className="text-justify">Landon, UK </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="py-3 pl-3">
                <h4 className="fw-600">New York Office</h4>
                <p className="text-justify">864 VT Paul Ave</p>
                <p className="text-justify">Oswego, NY 13126</p>
                <p className="text-justify">New York, USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row pt-5 fw-600">
        <div className="col-md-3">TermsFeed &copy; 2012 - 2020</div>

        <div className="col-md-6 text-center">
          <span className="px-4">Home</span>
          <span className="px-4">About</span>
          <span className="px-4">Service</span>
          <span className="px-4">Customer</span>
          <span className="px-4">Contact</span>
          <span className="px-4">Blog</span>
        </div>

        <div className="col-md-3 text-right">
          <img src={linkedIn} alt="linkedIn" className="px-3" />
          <img src={twitter} alt="twitter" className="px-3" />
          <img src={social} alt="facebbok" className="px-3" />
          <img src={telegram} alt="teligram" className="px-3" />
        </div>
      </div>
    </section>
  )
}