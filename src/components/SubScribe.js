import React from 'react';

export const SubScribe = () => {

  return (
    <section className="featues bg-offwhite">
      <div className="d-flex justify-content-between align-items-center">

        <div className="text-center py-3">
          <h1 className="text-primary fw-600">
            <span className="text-secondary">Subscribe &nbsp;</span>
            To Our News Latter</h1>
          <h1 className="text-primary fw-600">&amp; Get Updated Daily</h1>
        </div>


        <form className="form-inline">
          <div className="form-group">
            <input type="email" className="form-control"
              id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Avani Bataviya" />
          </div>
          <button type="submit" className="btn btn-primary btn-lg ">Submit</button>
        </form>
      </div>
    </section>
  )
}