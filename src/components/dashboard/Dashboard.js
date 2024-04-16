import React from "react";
import { useLocation } from 'react-router-dom';
import Profilepicture from '../profilepicture/Profilepicture';
import DocData from '../../data/doctors.json';
import Testimonals from "../testimonals/testimonals";
import RatingsGraph from "../ratingsgraph/ratingsgraph";
import Patientgraph from "../patientgraph/patientgraph";
import "./Dashboard.css";
import Image from '../../Assets/blur-hospital.jpg';

function Dashboard() {
  const location = useLocation();
  const receivedData = location.state?.data || 'No data received';
  const selectedValue = receivedData;

  const doctor = DocData.find(doctor => doctor.name === selectedValue);

  return (
    <div className = "card">
      <div className="first-container">
        <div className="First-Half">
          <div className="Profile"><Profilepicture id={doctor.id} /></div>
          <div className="Testimonals"><Testimonals id={doctor.id} /></div>
          <div className="BarGraph"><RatingsGraph id={doctor.id}/></div>
        </div>
      </div>
      <div className="Second-Half">
        <div className="Details">
          <p><strong>Name:</strong> {doctor.name}</p>
          <p><strong>Speciality:</strong> {doctor.specialty}</p>
          <p><strong>Experience:</strong> {doctor.experience}</p>
          <p><strong>Experience:</strong> {doctor.rating}</p>
        </div>
        <div className="PatientGraph">
          <Patientgraph id={doctor.id}/>
          <p className="xxx"><strong>This graph depicts no.of patients that are treated by the doctor in the years respectively.</strong></p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;