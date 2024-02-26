import Navbar from "./navBar"
import Login from "./Login";
import Welcome from "./Welcome";
import { useState,useEffect} from "react";

function App() {

  const [loginValid,setloginValid] = useState(false)

  useEffect(()=>{
      if(localStorage.getItem("logIn") == 1)
        setloginValid(true)
  },[])

  const logUserIn = ()=>
  {
    localStorage.setItem("logIn","1")
    setloginValid(true)
  }

  const logUserOut = ()=>
  {
      localStorage.setItem("logIn",0)
      setloginValid(false)
  }

  return (
    <>
      <Navbar changelogout = {logUserOut} isValid = {loginValid}/>
      {!loginValid && <Login changeLogin = {logUserIn}/>}
      {loginValid && <Welcome/>} 
    </>
  );
}

export default App;
