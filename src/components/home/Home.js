import React, { useState } from 'react';
import './Home.css';
import Image from '../../Assets/blur-hospital.jpg';
import { Navigate, useNavigate } from 'react-router-dom';


function Home() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard', { state: { data: selectedOption } });
  };

    return (
        <div className="image-container">
            <img className="image" src={Image} alt="Hospital interior" />
            <div className="overlay-card">
                <div>
                    <select className='search-bar' value={selectedOption} onChange={handleSelectChange}>
                        <option value="">Select Doctor</option>
                        <option value="Dr. John Smith">Dr. John Smith (Cardiology)</option>
                        <option value="Dr. Emily Johnson">Dr. Emily Johnson (Cardiology)</option>
                        <option value="Dr. Michael Brown">Dr. Michael Brown (Cardiology)</option>
                        <option value="Dr. Sarah Lee">Dr. Sarah Lee (Cardiology)</option>
                        <option value="Dr. David Miller">Dr. David Miller (Pediatrics)</option>
                        <option value="Dr. Jessica Martinez">Dr. Jessica Martinez (Pediatrics)</option>
                        <option value="Dr. Ryan Nguyen">Dr. Ryan Nguyen (Pediatrics)</option>
                        <option value="Dr. Olivia Garcia">Dr. Olivia Garcia (Pediatrics)</option>
                        <option value="Dr. Thomas Clark">Dr. Thomas Clark (Orthopedics)</option>
                        <option value="Dr. Sophia Wilson">Dr. Sophia Wilson (Orthopedics)</option>
                        <option value="Dr. Ethan Adams">Dr. Ethan Adams (Orthopedics)</option>
                        <option value="Dr. Ava Hernandez">Dr. Ava Hernandez (Orthopedics)</option>
                        <option value="Dr. James Wilson">Dr. James Wilson (Dermatology)</option>
                        <option value="Dr. Emma Thompson">Dr. Emma Thompson (Dermatology)</option>
                    </select>
                </div>

                <button className="search-button" onClick={handleClick}>Go</button>

            </div>
        </div>
    );
}

export default Home;
