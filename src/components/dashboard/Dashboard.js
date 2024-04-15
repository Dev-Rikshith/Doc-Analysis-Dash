import React from "react";
import { useLocation } from 'react-router-dom';

function Dashboard() {
  const location = useLocation();
  const receivedData = location.state?.data || 'No data received';

  return (
    <div>
      <h1>Receiver Page</h1>
      <h2>Data received:</h2>
      <p>{receivedData}</p>
    </div>
  );
}

    

export default Dashboard;