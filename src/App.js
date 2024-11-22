// import React from 'react';
// import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
// import Form from './components/Form';

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <div style={{ display: 'flex', justifyContent: 'space-between', padding: '2rem'}}>
//         <HeroSection />
//         <Form />
//       </div>
//     </div>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Form from './components/Form';
import SuccessPage from './components/SuccessPage';  // Create this page for the redirection

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<div style={{ display: 'flex', justifyContent: 'space-between', padding: '2rem' }}>
          <HeroSection />
          <Form />
        </div>} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
};

export default App;


// npm start to run
