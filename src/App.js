import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
//import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
//import{
//  BrowserRouter as Router,
 // Routes,
 // Route,
  
//}from "react-router-dom";



function App() {
  const [alert,setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
    // Remove the alert after 2 seconds
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  

  }
  return (
    <>
     <Navbar title="TextUtils"showAlert={showAlert} />{/*aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    {/*<Router>*/}
    {/*<Navbar title="TextUtils" aboutText="About TextUtils" showAlert={showAlert} />*/} {/* Pass aboutText */}

    <Alert alert={alert}/>
    <div className="container my-3">
    <Textform Heading="Enter your text to analyze" showAlert={showAlert} />
    {/*<Routes>
    <Route path="/about" element={<About />} />
    <Route path="/" element={<Textform Heading="Enter your text to analyze" showAlert={showAlert} />} />
          
     </Routes>*/}
     

     {/*<About/>*/}
    </div>
    {/*</Router>*/}
    </>
  );
}
export default App;

    
    











