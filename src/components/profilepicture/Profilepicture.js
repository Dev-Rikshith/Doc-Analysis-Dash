import React, { useState } from "react";
import Image1 from "../../Assets/1.jpeg";
import Image2 from "../../Assets/2.jpeg";
import Image3 from "../../Assets/3.jpeg";
import Image4 from "../../Assets/4.jpeg";
import Image5 from "../../Assets/5.jpeg";
import Image6 from "../../Assets/6.jpeg";
import Image7 from "../../Assets/7.jpeg";
import Image8 from "../../Assets/8.jpeg";
import Image9 from "../../Assets/9.jpeg";
import Image10 from "../../Assets/10.jpeg";
import Image11 from "../../Assets/11.jpeg";
import Image12 from "../../Assets/12.jpeg";


function Profilepicture() {

    const list = [
       "../../Assets/1.jpeg",
        Image2,
        Image3,
        Image4,
        Image5,
        Image6,
        Image7,
        Image8,
        Image9,
        Image10,
        Image11,
        Image12
    ];


  return (
    <div>
      <img className="profileimage" src={list[0]} alt="Doctor Image" />
    </div>
  );
}

export default Profilepicture;
