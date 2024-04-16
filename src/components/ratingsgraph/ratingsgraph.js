import React from "react";
import DocData from '../../data/doctors.json';
import "./ratingsgraph.css";

function RatingsGraph(props){
    const doctor = DocData.find(doctor => doctor.id === props.id);
    const ratings = doctor.ratings;
    const categories = ["Easy", "Medium", "Hard"];

    return (
        <div className="bar-chart">
          <h2>Analysis of the doctor's surgical outcomes across varying levels of difficulty</h2>
          <br></br>
          {ratings.map((rating, index) => (
            <div key={index}>
              <div className="label">{`${categories[index]}: ${rating}`}</div>
              <div className="bar-container">
                <div className="bar" style={{ width: `${rating * 20}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      );

}

export default RatingsGraph;