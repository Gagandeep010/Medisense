import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom

const Form = () => {
  const navigate = useNavigate();  // Initialize navigate function

  const [formData, setFormData] = useState({
    patientName: '',
    gender: '',
    age: '',
    dob: '',
    doctorAssigned: '',
    specialization: '',
    bedId: '',
    phone: '',
    admissionDate: '',
    contactPerson: '',
    contactPhone: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store form data in localStorage
    localStorage.setItem('patientDetails', JSON.stringify(formData));

    // Redirect to the success page
    navigate('/success');
  };

  return (
    <div
      style={{
        maxHeight: '600px',
        overflowY: 'auto',
        border: '1px solid #ccc',
        borderRadius: '8px',
        background: '#ffffff',
        padding: '2rem',
        width: '400px',
        marginRight: '10rem',
      }}
    >
      <form onSubmit={handleSubmit}>
        <h2
          style={{
            textAlign: 'center',
            backgroundColor: '#bac1ef',
            padding: '20px',
            borderRadius: '15px',
          }}
        >
          Patient Details
        </h2>
        <style>
            {`
                div::-webkit-scrollbar {
                display: none;
                }
            `}
        </style>

        <br />

        {/* Patient Name */}
        <div>
          <label htmlFor="patientName">Patient Name:</label>
          <input
            id="patientName"
            name="patientName"
            type="text"
            value={formData.patientName}
            onChange={handleInputChange}
            placeholder="Enter patient name"
          />
        </div>

        {/* Gender */}
        <div>
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Age */}
        <div>
          <label htmlFor="age">Age:</label>
          <input
            id="age"
            name="age"
            type="number"
            value={formData.age}
            onChange={handleInputChange}
            placeholder="Enter age"
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label htmlFor="dob">Date of Birth:</label>
          <input
            id="dob"
            name="dob"
            type="date"
            value={formData.dob}
            onChange={handleInputChange}
          />
        </div>

        {/* Doctor Assigned */}
        <div>
          <label htmlFor="doctorAssigned">Doctor Assigned:</label>
          <input
            id="doctorAssigned"
            name="doctorAssigned"
            type="text"
            value={formData.doctorAssigned}
            onChange={handleInputChange}
            placeholder="Dr. Name"
          />
        </div>

        {/* Doctor Specialization */}
        <div>
          <label htmlFor="specialization">Doctor Specialization:</label>
          <select
            id="specialization"
            name="specialization"
            value={formData.specialization}
            onChange={handleInputChange}
          >
            <option value="">Select</option>
            <option value="cardiology">Cardiology</option>
            <option value="neurology">Neurology</option>
            <option value="orthopedics">Orthopedics</option>
            <option value="pediatrics">Pediatrics</option>
          </select>
        </div>

        {/* Bed Number */}
        <div>
          <label htmlFor="bedId">Bed Number:</label>
          <input
            id="bedId"
            name="bedId"
            type="text"
            value={formData.bedId}
            onChange={handleInputChange}
            placeholder="Enter bed ID"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="+91"
          />
        </div>

        {/* Date of Admission */}
        <div>
          <label htmlFor="admissionDate">Date of Admission:</label>
          <input
            id="admissionDate"
            name="admissionDate"
            type="date"
            value={formData.admissionDate}
            onChange={handleInputChange}
          />
        </div>

        {/* Contact Person */}
        <div>
          <label htmlFor="contactPerson">Contact Person:</label>
          <input
            id="contactPerson"
            name="contactPerson"
            type="text"
            value={formData.contactPerson}
            onChange={handleInputChange}
            placeholder="Enter contact person's name"
          />
        </div>

        {/* Contact Person Phone Number */}
        <div>
          <label htmlFor="contactPhone">Contact Person's Phone:</label>
          <input
            id="contactPhone"
            name="contactPhone"
            type="tel"
            value={formData.contactPhone}
            onChange={handleInputChange}
            placeholder="+91"
          />
        </div>

        {/* Submit Button */}
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
