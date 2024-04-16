import React from "react";
import DocData from '../../data/doctors.json';
import "./testimonals.css"

function Testimonals(props){
    const doctor = DocData.find(doctor => doctor.id === props.id);
    // Map testimonials array to list items
    const testimonialsList = doctor.testimonials.map((testimonial, index) => (
    <li className="listofdoc" key={index}>{testimonial}</li>
    ));
    return(
        <div className="header-container">
            <div className="header">
                <ul>
                    {testimonialsList}
                </ul>
            </div>
        </div>
    );
}

export default Testimonals;