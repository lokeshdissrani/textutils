// import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      document.body.style.color='white'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black'

    }
    }
  return (
  <>
    <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} />
    <h1> Hiiiiiiii</h1>
    <div className="container my-3">
      <TextForm heading="Enter your text to analyze below" mode={mode}  />
      {/* <About/> */}
    </div>
  </>
  );
}

export default App;
