import React, { useState } from 'react';
import './Home.css';
import Image from '../../Assets/blur-hospital.jpg';
import { Navigate, useNavigate } from 'react-router-dom';

function Home() {
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const [selectedSpec, setSelectedSpec] = useState('');
    const [doctors, setDoctors] = useState([]);

    const handleDoctorSelectChange = (event) => {
        setSelectedDoctor(event.target.value);
    };

    const handleSpecSelectChange = (event) => {
        const selectedSpec = event.target.value;
        setSelectedSpec(selectedSpec);
        // Filter doctors based on the selected specialty
        const filteredDoctors = allDoctors.filter(doctor => doctor.specialty === selectedSpec);
        setDoctors(filteredDoctors);
    };

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/dashboard', { state: { data: selectedDoctor } });
    };

    const allDoctors = [
        { name: "Dr. John Smith", specialty: "Cardiology" },
        { name: "Dr. Emily Johnson", specialty: "Cardiology" },
        { name: "Dr. Michael Brown", specialty: "Cardiology" },
        { name: "Dr. Sarah Lee", specialty: "Cardiology" },
        { name: "Dr. David Miller", specialty: "Pediatrics" },
        { name: "Dr. Jessica Martinez", specialty: "Pediatrics" },
        { name: "Dr. Ryan Nguyen", specialty: "Pediatrics" },
        { name: "Dr. Olivia Garcia", specialty: "Pediatrics" },
        { name: "Dr. Thomas Clark", specialty: "Orthopedics" },
        { name: "Dr. Sophia Wilson", specialty: "Orthopedics" },
        { name: "Dr. Ethan Adams", specialty: "Orthopedics" },
        { name: "Dr. Ava Hernandez", specialty: "Orthopedics" },
        { name: "Dr. James Wilson", specialty: "Dermatology" },
        { name: "Dr. Emma Thompson", specialty: "Dermatology" }
    ];

    return (
        <div className="image-container">
            <img className="image" src={Image} alt="Hospital interior" />
            <div className="overlay-card">
                <div>
                    <select className='search-spec' value={selectedSpec} onChange={handleSpecSelectChange}>
                        <option value="">Select Speciality</option>
                        <option value="Cardiology">Cardiology</option>
                        <option value="Pediatrics">Pediatrics</option>
                        <option value="Orthopedics">Orthopedics</option>
                        <option value="Dermatology">Dermatology</option>
                    </select>
                </div>
                <div>
                    <select className='search-doctor' value={selectedDoctor} onChange={handleDoctorSelectChange}>
                        <option value="">Select Doctor</option>
                        {doctors.map(doctor => (
                            <option key={doctor.name} value={doctor.name}>{doctor.name}</option>
                        ))}
                    </select>
                </div>
                <button className="search-button" onClick={handleClick}>Go</button>
            </div>
        </div>
    );
}

export default Home;
