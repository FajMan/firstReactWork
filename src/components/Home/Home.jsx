import React from 'react';
import "./Home.css";
import FIDO from "/fido-lido.jpg"

const Home = () => {
  return (
    <div className='heroCon'>
      <div className="heroText">
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur ducimus cum eligendi.</p>
      </div>
      <div className="imgCon">
    <img src={FIDO} alt="" />
      </div>
    </div>
  )
}

export default Home