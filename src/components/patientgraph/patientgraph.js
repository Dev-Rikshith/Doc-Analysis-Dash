import DocData from '../../data/doctors.json';
import "./patientgraph.css";
import React, { useEffect, useRef } from 'react';

function Patientgraph(props) {
  const doctor = DocData.find(doctor => doctor.id === props.id);
  const patientData = doctor.patientData;

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = 400; // Adjusted canvas width
    canvas.height = 300; // Adjusted canvas height

    // Clear canvas before drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw axes
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(50, 250); // Adjusted y-axis length
    ctx.lineTo(350, 250); // Adjusted x-axis length
    ctx.stroke();

    // Draw x-axis labels
    const years = Object.keys(patientData);
    const xSpacing = 300 / (years.length - 1); // Adjusted xSpacing
    for (let i = 0; i < years.length; i++) {
      const x = 50 + i * xSpacing;
      ctx.fillText(years[i], x, 270); // Adjusted y-coordinate for x-axis labels
    }

    // Draw y-axis labels
    const maxPatients = Math.max(...Object.values(patientData));
    const ySpacing = 200 / maxPatients; // Adjusted ySpacing
    for (let i = 0; i <= 5; i++) { // Adjusted the number of y-axis labels
      const y = 250 - i * 50; // Adjusted y-coordinate for y-axis labels
      ctx.fillText(i * 50, 20, y);
    }

    // Draw patient data
    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;
    for (let i = 0; i < years.length; i++) {
      const x = 50 + i * xSpacing;
      const y = 250 - patientData[years[i]] * ySpacing;
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fillText(patientData[years[i]], x + 5, y - 5);
    }
    ctx.stroke();

  }, [patientData]);

  return <canvas className="line-graph" ref={canvasRef}></canvas>;
}

export default Patientgraph;
