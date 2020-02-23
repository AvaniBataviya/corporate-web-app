import React from 'react';
import rightArrow from '../image/right-arrow-1.png';

export const About = () => {
  return (
    <div className="main-section">
      <div className="container">
        <h1>We help you to boost</h1>
        <h1>your Bussiness</h1>
        <p>Like any agency we are only as ggod as the result we diliver of our client work</p>
        <button className="btn btn-primary">
          Get your Estimate
          <img src={rightArrow} alt="get your estimate"/>
        </button>
      </div>
    </div>
  );
};
