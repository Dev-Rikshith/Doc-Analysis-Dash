import React from 'react';
import Profilepicture from '../profilepicture/Profilepicture';
import DocData from '../../data/doctors.json';



const Dashboard = () => {
    const queryParams = new URLSearchParams(window.location.search);
    const selectedValue = queryParams.get('selectedValue');

    const doctor = DocData.find(doctor => doctor.name === selectedValue);

    return (
        <div>
            <h2>{doctor.specialty}</h2>
        </div>
    );
};

export default Dashboard;