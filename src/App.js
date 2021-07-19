


import React from "react";
import SignUp from './view/SignUp';
import Login from './view/logIn';
import HomePage from './view/HomePage';
function App() {
  return (
    <div style = {{
        position: 'absolute', 
        left: '50%', 
        top: '50%',
        transform: 'translate(-50%, -50%)'
    }}>
       <HomePage/>
    </div>
  
  );
}

export default App;
