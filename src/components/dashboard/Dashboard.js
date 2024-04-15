import React from "react";
import { useLocation } from 'react-router-dom';
import Profilepicture from '../profilepicture/Profilepicture';
import DocData from '../../data/doctors.json';

function Dashboard() {
  const location = useLocation();
  const receivedData = location.state?.data || 'No data received';
  const selectedValue = receivedData;

  const doctor = DocData.find(doctor => doctor.name === selectedValue);

  return (
      <div>
          <h2>{doctor.specialty}</h2>
      </div>
  );
}

export default Dashboard;