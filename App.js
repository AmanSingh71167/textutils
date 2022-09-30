import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   View
// } from "react-router-dom";


// / "deploy": "gh-pages -d build",

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#212048';
      showAlert('Dark mode has been enabled','success')
      // document.title = 'TextUtils - Light Mode'; // if want to change the title when u switch theme

      // setInterval(() => {
      //   document.title = "This website is amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install it now";
      // }, 1500);

      }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled','success')
      // document.title = 'TextUtils - dark Mode';
      }
  }

  return (
    <>

{/* <Switch><Switch/> this was used by the previous version of router but after v6 it is replaced by <Routes><Routes/>*/}

{/* //====================================> */}
        {/* <Router>     */}
            <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
            <Alert alert={alert}/>
            <div className="container my-3">
                  {/* <Routes> */}
                    {/* <Route exact path="/about" element={<About/>} /> */}
                  {/* </Routes> */}
                  {/* <Routes> */}
                    {/* <Route exact path="/" element={ */}
                     <TextForm heading='Enter the Text' mode={mode} showAlert={showAlert}/>
                    {/* } /> */}
                  {/* </Routes> */}
            </div>    
        {/* </Router> */}
{/* // ===================================> */}
    </>
  );
}

                                                     
export default App;
