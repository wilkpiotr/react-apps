import React from 'react';
import './MoreImages.css';

const MoreImages = () => {
  return (<section className="section MoreImages project">
  <div className="container">
    <h1 className="title">More Images React App</h1>
    {/* First component mount should fetch data and show the loader */}
    <div><img src="/images/1.jpg" alt="1"/></div>
    <div><img src="/images/2.jpg" alt="2"/></div> 
    <div><img src="/images/3.jpg" alt="3"/></div> 
    <div><img src="/images/4.jpg" alt="4"/></div>   
    <div>
      <a className="button is-large">Next Images</a> {/* Click on the button fetch next page */}
      <a class="button is-loading is-large">Loading</a> {/* This button is shown during fetching of the next page */}
    </div>
  </div>
  </section>)
}

export default MoreImages;