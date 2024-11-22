import React, { useState, useEffect } from 'react';

const SuccessPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [patientDetails, setPatientDetails] = useState(null);
  const [error, setError] = useState('');
  const [progress, setProgress] = useState(100);
  const [countdownActive, setCountdownActive] = useState(false);
  const [showReset, setShowReset] = useState(false);

  // Handle search query changes
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search button click
  const handleSearch = () => {
    const storedData = localStorage.getItem('patientDetails');
    if (storedData) {
      const parsedData = JSON.parse(storedData);

      // Ensure patientName exists before comparing
      if (parsedData && typeof parsedData === 'object' && parsedData.patientName && parsedData.patientName.toLowerCase() === searchQuery.toLowerCase()) {
        setPatientDetails(parsedData);
        setError('');
        // Check for saved progress specific to this patient
        const savedProgress = localStorage.getItem(parsedData.patientName);
        if (savedProgress) {
          setProgress(parseInt(savedProgress));
        } else {
          setProgress(100); // Reset progress to 100 if none is found
        }
        setCountdownActive(false);
        setShowReset(false);
      } else {
        setPatientDetails(null);
        setError('No patient found with that name.');
      }
    } else {
      setPatientDetails(null);
      setError('No patient data available.');
    }
  };

  // Countdown logic for progress bar
  useEffect(() => {
    let interval;
    if (countdownActive && progress > 0) {
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = Math.max(prevProgress - 1, 0);
          if (newProgress === 25) {
            // Play "ting" sound when progress reaches 25%
            // const sound = new Audio('/path/to/ting-sound.mp3'); // Add your sound file path here
            // sound.play();

            // Alert with patient name
            alert(`${patientDetails.patientName} has reached 25% progress!`);
          }

          // Update the progress in localStorage for the current patient
          if (patientDetails) {
            localStorage.setItem(patientDetails.patientName, newProgress); // Store progress for the specific patient
          }

          return newProgress;
        });
      }, 5000);
    } else if (progress === 0) {
      setCountdownActive(false); // Stop when progress reaches 0
    }
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [countdownActive, progress, patientDetails]);

  const handleStart = () => {
    setCountdownActive(true);
    setShowReset(true);
  };

  const handleStop = () => {
    setCountdownActive(false);
  };

  const handleReset = () => {
    setProgress(100);
    setCountdownActive(false);
    setShowReset(false);
    // Reset progress in localStorage for the current patient
    if (patientDetails) {
      localStorage.setItem(patientDetails.patientName, 100);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      {/* Success Message */}
      <h1 style={{ textAlign: 'center' }}>Form Submitted Successfully!</h1>
      <p style={{ textAlign: 'center' }}>Your patient details have been saved.</p>
      <br />
      <br />
      {/* Search Box */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <input
          type="text"
          placeholder="Search patient by name"
          value={searchQuery}
          onChange={handleSearchChange}
          style={{
            padding: '10px',
            width: '300px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            marginLeft: '10px',
            padding: '10px 20px',
            backgroundColor: '#3f51b5',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Search
        </button>
      </div>

      {/* Error Message */}
      {error && <p style={{ color: 'red', marginTop: '1rem', textAlign: 'center' }}>{error}</p>}

      {/* Patient Details and Image */}
      {patientDetails && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          {/* Patient Details and Image Container */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginBottom: '2rem' }}>
            {/* Patient Details */}
            <div
              style={{
                background: '#f9f9f9',
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '1.5rem',
                maxWidth: '600px',
                textAlign: 'left',
                margin: '2rem',
                flex: 1,
              }}
            >
              <h2 style={{ textAlign: 'center', marginBottom: '1rem' }}>Patient Details</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', rowGap: '8px', columnGap: '20px' }}>
                <p><strong>Name:</strong></p> <p>{patientDetails.patientName}</p>
                <p><strong>Gender:</strong></p> <p>{patientDetails.gender}</p>
                <p><strong>Age:</strong></p> <p>{patientDetails.age}</p>
                <p><strong>Date of Birth:</strong></p> <p>{patientDetails.dob}</p>
                <p><strong>Doctor Assigned:</strong></p> <p>{patientDetails.doctorAssigned}</p>
                <p><strong>Specialization:</strong></p> <p>{patientDetails.specialization}</p>
                <p><strong>Bed ID:</strong></p> <p>{patientDetails.bedId}</p>
                <p><strong>Phone:</strong></p> <p>{patientDetails.phone}</p>
                <p><strong>Admission Date:</strong></p> <p>{patientDetails.admissionDate}</p>
                <p><strong>Contact Person:</strong></p> <p>{patientDetails.contactPerson}</p>
                <p><strong>Contact Phone:</strong></p> <p>{patientDetails.contactPhone}</p>
              </div>
            </div>

            {/* Image */}
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img
                src="/drip.png" // Replace with your image path
                alt="Description"
                style={{
                  height: '400px',
                  width: '400px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
            </div>
          </div>

          {/* Progress Bar */}
          <div style={{ textAlign: 'center', marginTop: '2rem', width: '100%' }}>
            <div
              style={{
                background: '#ddd',
                height: '30px',
                width: '100%',
                maxWidth: '400px',
                borderRadius: '5px',
                overflow: 'hidden',
                margin: '0 auto', // Center the progress bar
              }}
            >
              <div
                style={{
                  background: '#3f51b5',
                  height: '100%',
                  width: `${progress}%`,
                  transition: 'width 0.5s',
                }}
              ></div>
            </div>
            <p style={{ marginTop: '0.5rem' }}>{progress}% Remaining</p>
            <div style={{ marginTop: '1rem' }}>
              {!countdownActive && (
                <button
                  onClick={handleStart}
                  style={{
                    marginRight: '10px',
                    padding: '10px 20px',
                    backgroundColor: '#3f51b5',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                >
                  Start
                </button>
              )}
              {countdownActive && (
                <button
                  onClick={handleReset}
                  style={{
                    marginRight: '10px',
                    padding: '10px 20px',
                    backgroundColor: '#ffa726',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                >
                  Reset
                </button>
              )}
              <button
                onClick={handleStop}
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#d32f2f',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                Stop
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuccessPage;
