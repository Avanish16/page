import React from "react";
import "./section.css";

export default function Section() {
  return (
    <div className="sec-container">
      <div className="head">
        <h6>Best Service Provider</h6>
        
        <h2 className="head">
          Empowering Innovation,
          <br />
          Transforming Possibilities
        </h2>
      </div>
      <div className="para">
        <p >
          We provide innovative solutions for businesses worldwide. With
          expertise in Android and iOS application development, website design,
          UI/UX design, and digital marketing
        </p>
      </div>
      <div className="btn">
        <button className="btn_blk">Let's Talk</button>
        <button>Watch </button>
      </div>
      <h3>
        Leading domestic and global enterprises rely <span> Nezuware </span> for their
        comprehensive global employment solutions
      </h3>
    </div>
  );
}
