import React from 'react';
import image1 from '../image/Image14.png';
import image2 from '../image/Image19.png';
import Page1 from '../image/Page-1.png';
import rightArrow from '../image/right-arrow-1.png';
import flash from '../image/flash.png';

export const ServicesFullScreen = () => {
    return (
        <div className="services-full-screen">
            <div className="container-fluid">
                <div className="row flex-fill">
                    <div className="col-md-6 p-0 bg-gray">
                        <section>
                            <div className="d-flex pb-4">
                                <div>
                                    <img src={Page1} className="mx-auto white-rounded-backgroung" alt="services" />
                                </div>
                            </div>
                            <div className="py-4">
                                <h1 className="text-primary fw-600">
                                    Diffrerentiate Yourself And
                                </h1>
                                <h1 className="text-primary fw-600">Attract Attention <span className="text-secondary">Sales</span></h1>
                                <h1 className="text-secondary fw-600">And Profites</h1>
                            </div>
                            <div>
                                <p className="text-graydark text-justify">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>

                                <p className="text-graydark text-justify pt-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                            <button className="btn btn-primary fw-600 p-4 fs-20 mt-5">
                                Get Your Estimates
                                <img src={rightArrow} alt="read more" className="ml-3" />
                            </button>
                        </section>
                    </div>
                    <div className="col-md-6 p-0">
                        <img src={image1} alt="service1" className="service-img" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 p-0">
                        <img src={image2} alt="service2" className="service-img" />
                    </div>
                    <div className="col-md-6 p-0">
                    <section className="service2">
                            <div className="d-flex pb-4">
                                <div>
                                    <img src={flash} className="mx-auto white-rounded-backgroung " alt="services" />
                                </div>
                            </div>
                            <div className="py-4">
                                <h1 className="text-primary fw-600">
                                    Harness The  <span className="text-secondary">Power</span> Of
                                </h1>
                                <h1 className="text-primary fw-600">Words In Your Life</h1>
                            </div>
                            <div>
                                <p className="text-graydark text-justify">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>

                                <p className="text-graydark text-justify pt-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                            <button className="btn btn-primary fw-600 p-4 fs-20 mt-5">
                                Get Your Estimates
                                <img src={rightArrow} alt="read more" className="ml-3" />
                            </button>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};
