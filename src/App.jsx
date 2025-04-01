import { useState } from 'react'
import Navbar from "./components/Navbar.jsx"
import Signup from "./pages/Signup.jsx"
import SignIn from "./pages/SignIn.jsx"
import Dashboard from "./pages/Dashboard.jsx"
function App() {
 return(
  <>

    
  <Navbar/>

  <Signup/>
  <SignIn/>
  <Dashboard/>
     
      
    
  </>
  
 )
}

export default App
