import React,{useState} from "react";
function App() {
  const [data,setData]=useState({
    username:'',
    password:''
  })
  const {username,password}=data;
  const changeHandler=(e)=>{
    setData({...data,[e.target.name]:e.target.value});
  }

  const submitHandler=(e)=>{
    e.preventDefault();
    console.log(data);
  }

  return (
    <div className="App">
      <center>
      <div className="form">
     <form onSubmit={submitHandler}>
       <div className="input-container">
         <label>Username </label>
         <input type="text" name="username" required value={username} onChange={changeHandler}/>
       </div>
       <div className="input-container">
         <label>Password </label>
         <input type="password" name="password" required value={password} onChange={changeHandler}/>
       </div>
       <div className="button-container">
         <input type="submit" name="submit"/>
       </div>
     </form>
   </div>
   </center>
    </div>
  );
}

export default App;