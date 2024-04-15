import React from "react";
import DocData from '../../data/doctors.json';

function Testimonals(props){
    const doctor = DocData.find(doctor => doctor.id === props.id);
    // Map testimonials array to list items
    const testimonialsList = doctor.testimonials.map((testimonial, index) => (
    <li key={index}>{testimonial}</li>
    ));
    return(
        <ul>
            {testimonialsList}
        </ul>
    );
}

export default Testimonals;