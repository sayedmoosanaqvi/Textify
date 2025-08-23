import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './Components/Pages/About';

function App() { 
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const [mode, setMode] = useState("light");
  const [btnMode, setBtnmode] = useState("Enable Dark");

  const toggleMode = (color) => {
    document.body.style.backgroundColor = 'white';

    if (color === 'dark') {
      setMode('dark');
      setBtnmode('Enable Light');
      document.body.style.backgroundColor = 'black';
      showAlert('Dark Mode Enabled', 'success');
    // } else if (color === 'blue') {
    //   setMode('blue');
    //   setBtnmode('Enable Light');
    //   document.body.style.backgroundColor = '#0d2241ff'; 
    //   showAlert('Blue Mode Enabled', 'success');
    } else if (color === 'green') {
      setMode('green');
      setBtnmode('Enable Light');
      document.body.style.backgroundColor = '#3d584bff'; 
      showAlert('Green Mode Enabled', 'success');
    // } else if (color === 'red') {
    //   setMode('red');
    //   setBtnmode('Enable Light');
    //   document.body.style.backgroundColor = '#310207ff'; 
    //   showAlert('Red Mode Enabled', 'success');
    } else {
      setMode('light');
      setBtnmode('Enable Dark');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode Enabled', 'success');
    }
  };

  return (
    <>
      <Router>
        <Navbar 
          title="Textify" 
          mode={mode} 
          toggleMode={toggleMode}
          btnMode={btnMode}  
          about="About US" 
        />
        <Alert alert={alert}/>

        <div className='container'>
          <Routes>
            <Route path="/" element={<TextForm showAlert={showAlert} mode={mode} />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
