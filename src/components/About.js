import React from 'react';
import rightArrow from '../image/right-arrow-1.png';

export const About = () => {
  return (
    <div className="about-section">
      <div className="container text-center mb-5 pb-5">
        <h1 className="text-line">We help you to boost</h1>
        <h1 className="text-line pb-4">your 
          <span className="text-secondary">Bussiness</span>
        </h1>
        <p className="text-white fw-600">Like any agency we are only as good as the result </p>
        <p className="text-white  fw-600"> we diliver of our client work</p>
        <button className="btn btn-secondary p-3 fw-600">
          Get your Estimate
          <img src={rightArrow} alt="get your estimate" className="ml-3" />
        </button>
      </div>
    </div>
  );
};
