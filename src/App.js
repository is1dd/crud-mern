import ReactDOM from "react-dom/client";
import './App.css';
import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";
import Dashboard  from './components/Dashboard';
import Consignment from './components/Consignment';
import Login from "./components/Login";
import { useContext, useState } from "react";
import { ApiContext } from "./context/ApiContext";
import Update from "./components/Update";
// import Protected from "./components/Protected";

function App() {
  const [email , setEmail] = useState("")
  const [pass , setPass] = useState("")
  // const [auth, setAuth] = useState(false)
   const {auth,handleSethAuth} = useContext(ApiContext);
   console.log(auth)
  function clickHandler(e){
    e.preventDefault()
    if(email === "admin@gmail.com" && pass==="1234"){
      // setAuth(true)
      handleSethAuth();
      alert("You are logged IN")
    }else{
      alert("Invalid Credentials")
    }
    
  }
  return (
    <Router>

   
    <div className="App">
      <h1> Courier Service Company!</h1>
      {auth && <Dashboard />}
       <Routes>
                 <Route exact path='/' element={< Login clickHandler={clickHandler} setEmail={setEmail} setPass={setPass}/>}></Route>
                 <Route exact path='/dashboard' element={ 
                  
                  < Dashboard /> }
                 />
                
                  
                 <Route exact path='/consignment' element={< Consignment />}></Route>
                 <Route exact path='/update/:id' element={< Update />}></Route>
          </Routes>
     </div>
       
       </Router>
      
   
    
  );
}

export default App;
