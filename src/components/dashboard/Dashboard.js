import React from "react";
import { useLocation } from 'react-router-dom';
import Profilepicture from '../profilepicture/Profilepicture';
import DocData from '../../data/doctors.json';
import Testimonals from "../testimonals/testimonals";
import RatingsGraph from "../ratingsgraph/ratingsgraph";
import "./Dashboard.css";

function Dashboard() {
  const location = useLocation();
  const receivedData = location.state?.data || 'No data received';
  const selectedValue = receivedData;

  const doctor = DocData.find(doctor => doctor.name === selectedValue);

  return (
    <div>
      <div className="Profile"><Profilepicture id={doctor.id} /></div>
      <div className="Testimonals"><Testimonals id={doctor.id} /></div>
      <div className="BarGraph"><RatingsGraph id={doctor.id}/></div>
      <div className="Details">
        <p>Name: {doctor.name}</p>
        <p>Speciality: {doctor.specialty}</p>
        <p>Experience: {doctor.experience}</p>
        <p>Overall Rating: {doctor.rating}</p>
      </div>
      
    </div>
  );
}

export default Dashboard;