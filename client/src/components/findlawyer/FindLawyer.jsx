import React, { useState } from 'react';
import './FindLawyer.css';

const FindLawyer = () => {
  const [selectedLawyerType, setSelectedLawyerType] = useState('');
  const lawyerTypeDetails = {
    criminal: [
      {
        name: 'Aditya Mukhate',
        address: '420 Upper St, City',
        phoneNumber: '717-717-0091',
        experience: '19 years',
        image: 'https://lh3.googleusercontent.com/a/AAcHTtdWiJGFtTXTQtR_bMqX3e9lQRsFBtdau_Khl-RYrQcrXpU=s360-c-no', // Replace with actual image URL
      },
      {
        name: 'Radha Krishna',
        address: '123 Main St, City',
        phoneNumber: '123-456-7890',
        experience: '5 years',
        image: 'https://lh3.googleusercontent.com/a/AAcHTtdWiJGFtTXTQtR_bMqX3e9lQRsFBtdau_Khl-RYrQcrXpU=s360-c-no', // Replace with actual image URL
      },
      {
        name: 'Diprit Khaitan',
        address: '456 Mango Ave, Town',
        phoneNumber: '321-456-7890',
        experience: '5 years',
        image: 'https://lh3.googleusercontent.com/a/AAcHTtdWiJGFtTXTQtR_bMqX3e9lQRsFBtdau_Khl-RYrQcrXpU=s360-c-no', // Replace with actual image URL
      },
      {
        name: 'Ram Iswar',
        address: '456 Oak Ave, Town',
        phoneNumber: '913-290-7890',
        experience: '5 years',
        image: 'https://lh3.googleusercontent.com/a/AAcHTtdWiJGFtTXTQtR_bMqX3e9lQRsFBtdau_Khl-RYrQcrXpU=s360-c-no', // Replace with actual image URL
      },
      {
        name: 'John Cena',
        address: '123 Main St, City',
        phoneNumber: '123-456-7890',
        experience: '5 years',
        image: 'https://lh3.googleusercontent.com/a/AAcHTtdWiJGFtTXTQtR_bMqX3e9lQRsFBtdau_Khl-RYrQcrXpU=s360-c-no', // Replace with actual image URL
      },
    ],
    family: [
      {
        name: 'C.M. Punk',
        address: '456 Oak Ave, Town',
        phoneNumber: '987-654-3210',
        experience: '8 years',
        image: 'https://lh3.googleusercontent.com/a/AAcHTtdWiJGFtTXTQtR_bMqX3e9lQRsFBtdau_Khl-RYrQcrXpU=s360-c-no', 
      },
      {
        name: 'Aditya Mukhate',
        address: '123 Main St, City',
        phoneNumber: '678-000-7890',
        experience: '7 years',
        image: 'https://lh3.googleusercontent.com/a/AAcHTtdWiJGFtTXTQtR_bMqX3e9lQRsFBtdau_Khl-RYrQcrXpU=s360-c-no', // Replace with actual image URL
      },
      {
        name: 'J.C. Gada',
        address: '123 Side St, Village',
        phoneNumber: '916-456-7890',
        experience: '10 years',
        image: 'https://lh3.googleusercontent.com/a/AAcHTtdWiJGFtTXTQtR_bMqX3e9lQRsFBtdau_Khl-RYrQcrXpU=s360-c-no', // Replace with actual image URL
      },
      {
        name: 'Ram Iswar',
        address: '123 Main St, City',
        phoneNumber: '123-456-7890',
        experience: '5 years',
        image: 'https://lh3.googleusercontent.com/a/AAcHTtdWiJGFtTXTQtR_bMqX3e9lQRsFBtdau_Khl-RYrQcrXpU=s360-c-no', // Replace with actual image URL
      },
      
    ],
  };

  const handleDropdownChange = (e) => {
    setSelectedLawyerType(e.target.value);
  };

  return (
    <div className="FindLawyer_container">
      <div className="lawyer_section">
        <h1>Find a Lawyer</h1>
        <label htmlFor="lawyerType">Select a type of lawyer:</label>
        <select
          id="lawyerType"
          value={selectedLawyerType}
          onChange={handleDropdownChange}
        >
          <option value="" disabled>Select a specialty...</option>
          <option value="criminal">Criminal Lawyer</option>
          <option value="family">Family Lawyer</option>
          <option value="corporate">Corporate Lawyer</option>
          <option value="immigration">Immigration Lawyer</option>
          <option value="personalInjury">Personal Injury Lawyer</option>
          <option value="estatePlanning">Estate Planning Lawyer</option>
          <option value="bankruptcy">Bankruptcy Lawyer</option>
          <option value="intellectualProperty">Intellectual Property Lawyer</option>
          <option value="employment">Employment Lawyer</option>
          <option value="civilRights">Civil Rights Lawyer</option>
        </select>
      </div>
      <div className="lawyer_details">
        {lawyerTypeDetails[selectedLawyerType]?.map((lawyer, index) => (
          <div className="lawyer_card" key={index}>
            <img src={lawyer.image} alt={`Lawyer ${index}`} className="lawyer_image" />
            <div className="lawyer_info">
              <h2>{lawyer.name}</h2>
              <p>Address: {lawyer.address}</p>
              <p>Phone: {lawyer.phoneNumber}</p>
              <p>Experience: {lawyer.experience}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FindLawyer;
