import React from 'react';
import quote from '../image/quote.png';
import blueRightArrow from '../image/right-arrow.png';
import whiteRightArrow from '../image/right-arrow-1.png';
import star from '../image/star.png';
import author1 from '../image/Image11.png';
import author2 from '../image/Image10.png';
import author3 from '../image/Image9.png';
import blueQuote from '../image/quote-1.png';


export const CustomerFeedBack = () => {
  const feedBacks = [
    {
      authorImage: author1,
      name: "John Wise",
      designation: 'Manager, Subsied'
    },
    {
      authorImage: author2,
      name: "Dustin Hardy",
      designation: 'Manager, Subsied'
    },
    {
      authorImage: author3,
      name: "Erik Tran",
      designation: 'Manager, Subsied'
    }
  ];

  return (
    <section className="bg-gray customerFeedBack">
      <div className="d-flex pb-5">
        <img src={quote} className="mr-auto white-rounded-backgroung" alt="services" />
      </div>
      <div className="d-flex justify-content-between">
        <div>
          <h1 className="text-primary fw-600">Some Lovely <span className="text-secondary">Feedback</span></h1>
          <h1 className="text-primary fw-600 py-3">From Our Clients</h1>
        </div>
        <div>
          <button className="btn btn-outline-primary border- p-3">
            <img src={blueRightArrow} alt="blueRightArrow" />
          </button>
          <button className="btn btn-primary border-0 ml-3 p-3">
            <img src={whiteRightArrow} alt="whiteRightArrow" />
          </button>
        </div>
      </div>

      <div className="row">
        {
          feedBacks.map((item, i) => {
            return (
              <div
                className={`col-md-4 ` + (i + 1 === 2 ? "pr-5" : (i + 1 === 1 ? "pr-5" : ""))}
                key={i + 1}
              >
                <div className="p-5 bg-white">
                  {
                    [...Array(5)].map((e, x) => <img src={star} alt="star" key={i + x + item.name} className="mr-2" />)
                  }
                  <p className="feedBackText py-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                  <div className="d-flex  flex-nowrap justify-content-between mt-3">
                    <div className="author d-flex align-content-center">
                      <img src={item.authorImage} alt="author1" />
                      <div className="d-flex flex-column justify-content-center ml-4">
                        <h4 className="fw-600">{item.name}</h4>
                        <div className="text-graydark">{item.designation}</div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <img src={blueQuote} alt="quote" />
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }

      </div>
    </section>
  )
}