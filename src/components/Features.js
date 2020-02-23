import React from 'react';
import bookmark from '../image/bookmark.png';
import openSource from '../image/science-fiction.png';
import optimalChoice from '../image/flash-1.png';
import highSecurity from '../image/password.png';
import advice from '../image/tip.png';
import think from '../image/think.png';
import responsiv from '../image/responsive.png';

export const Features = () => {
  const features1 = [
    { image: openSource, name: 'Open Source' },
    { image: optimalChoice, name: 'Optimal Choice' },
    { image: highSecurity, name: 'High Security' }
  ];

  const features2 = [
    { image: advice, name: 'Great Advice' },
    { image: think, name: 'Creative Layout' },
    { image: responsiv, name: 'Super Responsiv' }
  ];

  return (
    <section className="featues bg-offwhite">
      <div className="d-flex pb-4">
        <img src={bookmark} className="mx-auto white-rounded-backgroung" alt="feature" />
      </div>

      <div className="text-center py-3">
        <h1 className="text-primary fw-600">We have Some Awesome</h1>
        <h1 className="text-primary fw-600"><span className="text-secondary">Features</span> For You</h1>
      </div>

      <div className="row py-4">
        {
          features1.map((fea, index) => {
            return (
              <div className={`col-lg-4 d-flex p-5` + ((index + 1) === 2 ? " bg-white box" : "")} key={index}>

                <img src={fea.image} alt={fea.name} className="feature-image" />

                <div className="d-flex flex-column justify-content-center ml-4">
                  <h4 className="fw-600">{fea.name}</h4>
                  <div className="text-graydark text-justify">Disphring marketing logo for small business owner.Mark for update logo.</div>
                </div>
              </div>
            )
          })
        }
      </div>

      <div className="row py-4">
        {
          features2.map((fea, index) => {
            return (
              <div className={`col-lg-4 d-flex p-5`} key={index}>

                <img src={fea.image} alt={fea.name} className="feature-image" />

                <div className="d-flex flex-column justify-content-center ml-4">
                  <h4 className="fw-600">{fea.name}</h4>
                  <div className="text-graydark text-justify">Disphring marketing logo for small business owner.Mark for update logo.</div>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  );
};
