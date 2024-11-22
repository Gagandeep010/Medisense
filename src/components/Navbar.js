import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', // Ensure all items are vertically aligned
      padding: '1rem', 
      background: '#ffffff', 
      borderBottom: '1px solid #ddd' // Optional border for better structure
    }}>
      {/* Logo and Brand Name */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/logo.png" alt="MediSense Logo" style={{ height: '40px' }} />
        <span style={{ fontSize: '20px', fontWeight: 'bold', marginLeft: '1.5rem' }}>
          MediSense
        </span>
      </div>

      {/* Navigation Links */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <a 
          href="#home" 
          style={{ 
            margin: '0 1rem', 
            textDecoration: 'none', 
            fontSize: '15px', 
            color: 'black' 
          }}
        >
          Home
        </a>
        <a 
          href="#about" 
          style={{ 
            textDecoration: 'none', 
            fontSize: '15px', 
            color: 'black' 
          }}
        >
          About Us
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
