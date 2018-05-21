import React from 'react';
import './Articles.css';

const Articles = () => {
  return (
    <section className="section Articles project">
      <div className="container">
        <h1 className="title">Articles React App</h1>
        {/* First component mount should fetch data and show the loader */}
        <div>
            <ul className="article-list menu-list">
              <li><a>Article 1</a></li>
              <li><a className="is-active" >Article 2</a></li>
              <li><a>Article 3</a></li>
              <li><a>Article 4</a></li>
              <li><a>Article 5</a></li>
            </ul>  
        </div>
        {/* Clicking article on the list should show loader in the right side and fetch single article */}
        <div className="article">
          <h1 className="title ">Article 2</h1>
          <p> Text of article 2 </p>
        </div>
      </div>
    </section>  
  )
}

export default Articles;