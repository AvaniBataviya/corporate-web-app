import React from 'react';

export const Header = () => {
  return (
    <nav className="px-5 corporat-header navbar navbar-expand-lg desktop-header bg-light justify-content-between align-items-center">
      <a className="navbar-brand mr-auto logo" href="!#">
        D<span className="text-secondary">A</span></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end align-content-center" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link  nav-active" href="!#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-3" href="!#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-3" href="!#">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-3" href="!#">Customer</a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-3" href="!#">Blog</a>
          </li>
          <li className="nav-item">
            <a className="nav-link px-3" href="!#">Contact</a>
          </li>
          <li className="nav-item pl-3">
            <button className="btn btn-primary border-0 py-2 px-4" href="#">Get a Quote</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
