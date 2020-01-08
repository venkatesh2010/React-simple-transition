import React from "react";

export const CardStub = () => (
  <div className="card">
    <header className="card-header">
      <p className="card-header-title">Component</p>
      <a className="card-header-icon" aria-label="more options">
        <span className="icon">
          <i className="fas fa-angle-down" aria-hidden="true" />
        </span>
      </a>
    </header>
    <div className="card-content">
      <div className="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
        iaculis mauris.
        <a>@bulmaio</a>. <a>#css</a> <a>#responsive</a>
        <br />
        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
    </div>
    <footer className="card-footer">
      <a className="card-footer-item">Save</a>
      <a className="card-footer-item">Edit</a>
      <a className="card-footer-item">Delete</a>
    </footer>
  </div>
);
