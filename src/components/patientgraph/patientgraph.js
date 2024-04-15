import DocData from '../../data/doctors.json';
import "./patientgraph.css";
import React, { useEffect, useRef } from 'react';

function Patientgraph(props){
    const doctor = DocData.find(doctor => doctor.id === props.id);
    const patientData = doctor.patientData;

    const canvasRef = useRef(null);

    useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = 600;
    canvas.height = 400;

    // Draw axes
    ctx.beginPath();
    ctx.moveTo(50, 50);
    ctx.lineTo(50, 350);
    ctx.lineTo(550, 350);
    ctx.stroke();

    // Draw x-axis labels
    const years = Object.keys(patientData);
    const xSpacing = 500 / (years.length - 1);
    for (let i = 0; i < years.length; i++) {
      const x = 50 + i * xSpacing;
      ctx.fillText(years[i], x, 370);
    }

    // Draw y-axis labels
    const maxPatients = Math.max(...Object.values(patientData));
    const ySpacing = 300 / maxPatients;
    for (let i = 0; i <= 10; i++) {
      const y = 350 - i * 30;
      ctx.fillText(i * 30, 20, y);
    }

    // Draw patient data
    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;
    for (let i = 0; i < years.length; i++) {
      const x = 50 + i * xSpacing;
      const y = 350 - patientData[years[i]] * ySpacing;
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