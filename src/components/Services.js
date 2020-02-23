import React from 'react';
import support from '../image/support.png';
import graph from '../image/graph.png';
import rightArrow from '../image/right-arrow-3.png';
import digitalMarketing from '../image/digital-marketing.png';
import marketingAnalysis from '../image/speed.png';

export const Services = () => {
  return (
    <section className="services bg-offwhite">
      <div className="container">
        <div className="d-flex pb-4">
          <img src={support} className="mx-auto white-rounded-backgroung" alt="services" />
        </div>

        <div className="text-center py-3">
          <h1 className="text-primary fw-600">We offer the full range of</h1>
          <h1 className="text-primary fw-600">execellence <span className="text-secondary">Services</span></h1>
        </div>

        <div className="row py-4">
          <div className="col-lg-4 p-5">
            <div className="text-center">
              <img src={graph} alt="Marketing Analysis" className="py-4" />
              <h5 className="fw-600">Marketing Analysis</h5>
              <p className="py-4 text-graydark">
                  the purpose of your brochure may diffre from business to business.
              </p>
              <button className="btn btn-link fw-300">
                Read More
                <img src={rightArrow} alt="read more" className="ml-3"/>
              </button>
            </div>
          </div>

          <div className="col-lg-4 p-5 bg-white box">
            <div className="text-center">
              <img src={digitalMarketing} alt="Marketing Analysis" className="py-4" />
              <h5 className="fw-600">Email Marketing</h5>
              <p className="py-4 text-graydark">
                  Disphiring marketing logo for small business owners.
              </p>
              <button className="btn btn-link fw-300">
                Read More
                <img src={rightArrow} alt="read more" className="ml-3"/>
              </button>
            </div>
          </div>

          <div className="col-lg-4 p-5">
            <div className="text-center">
              <img src={marketingAnalysis} alt="Marketing Analysis" className="py-4" />
              <h5 className="fw-600">Website Optimization</h5>
              <p className="py-4 text-graydark">
                  the purpose of your brochure may diffre from business to business.
              </p>
              <button className="btn btn-link fw-300">
                Read More
                <img src={rightArrow} alt="read more"  className="ml-3"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
