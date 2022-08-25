import './App.css';
import Header from "./components/Header";
import InputUser from "./components/Input";
import {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"



function App() {
  const [userName, setUserName]= useState('')
  const [userPassword, setPassword]=useState('')

  return (
    <div className="App">
      <Header/>
      <InputUser user={userName} setUser={setUserName} setPassword={setPassword} password={userPassword} />
    </div>
  );
}

export default App;
