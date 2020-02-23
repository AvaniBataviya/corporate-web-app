import React from 'react';
import image1 from '../image/Image14.png';
import question from '../image/question.png';

export const Contact = () => {
  return (
    <div className="services-full-screen">
      <div className="container-fluid">
        <div className="row flex-fill">
          <div className="col-md-6 p-0">
            <img src={image1} alt="service1" className="service-img" />
          </div>
          <div className="col-md-6 p-0 bg-gray">
            <section>
              <div className="d-flex pb-4">
                <div>
                  <img src={question} className="mx-auto white-rounded-backgroung" alt="services" />
                </div>
              </div>
              <div className="py-4">
                <h1 className="text-primary fw-600">
                  Need a Help?
                </h1>
                <h1 className="text-primary fw-600">Don't worry <span className="text-secondary">Contact Us</span></h1>
                <p className="text-graydark">No spam: consecetetur elit</p>
              </div>

              <form className="pr-5 mr-5">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Name *</label>
                  <input type="text" className="form-control"
                    id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Avani Bataviya" />
                </div>

                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email *</label>
                  <input type="email" className="form-control"
                    id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="avanibataviya@gmail.com" />
                </div>

                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">Message *</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Type here..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary border-0 btn-lg">Submit</button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}