import React from 'react';
import support from '../image/support.png';
import graph from '../image/graph.png';
import rightArrow from '../image/right-arrow-3.png';
import digitalMarketing from '../image/digital-marketing.png';
import marketingAnalysis from '../image/speed.png';

export const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="d-flex pb-4">
          <img src={support} className="mx-auto white-rounded-backgroung" alt="services"/>
        </div>

        <div className="text-center py-3">
          <h2>We offer the full range of</h2>
          <h2>execellence Services</h2>
        </div>

        <div className="row py-4">
          <div className="col-lg-4 p-4">
            <div>
              <img src={graph} alt="Marketing Analysis" className=""/>
              <h2>Marketing Analysis</h2>
              <button className="btn btn-link">
                Read More
                <img src={rightArrow} alt="read more"/>
              </button>
            </div>
          </div>

          <div className="col-lg-4 p-4">
            <div>
              <img src={digitalMarketing} alt="Marketing Analysis" className=""/>
              <h2>Email Marketing</h2>
              <button className="btn btn-link">
                Read More
                <img src={rightArrow} alt="read more"/>
              </button>
            </div>
          </div>

          <div className="col-lg-4 p-4">
            <div>
              <img src={marketingAnalysis} alt="Marketing Analysis" className=""/>
              <h2>Website Optimization</h2>
              <button className="btn btn-link">
                Read More
                <img src={rightArrow} alt="read more"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
