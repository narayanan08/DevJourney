import {Link, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import { FormControl, InputLabel, Input, TextField } from "@mui/material";


const usernames = ["username1","username2"];

const credentials = {
    "username1":"abcde",
    "username2":"fghij",
}



const Header=()=>{

    return (
    <div className="header">
        <div>
            <Link to="/" className="logo">DevJourney</Link>
        </div>
        <div className="login-signup">
            <Link to="/signup" className="signup">Sign Up</Link>
        </div>
    </div>
    )
    
}

const LoginForm=()=>{

    const navigate = useNavigate();

    const [formData,setFormData] = useState({
        username:"",
        password:"",
    })
    
    const validateDetails = (event)=>{
        const uppercaseRegex = /[A-Z]/g;
        const lowercaseRegex = /[a-z]/g;
        const numberRegex = /\d/g;
        const specialCharRegex = /[^a-zA-Z0-9]/g;
       if(formData.username.length === 0){
        alert("Username must not be empty!");
        event.preventDefault();
       }else if(formData.password.length === 0){
        alert("Password must not be empty!");
        event.preventDefault();
       }
    //    navigate(`/userDashBoard/${formData.username}`);
       if(formData.username in credentials && credentials[formData.username] === formData.password){
        navigate(`/userDashBoard/${formData.username}`);
       }
       else{
        alert("Either username or password in incorrect");
        event.preventDefault();
       }
       

    }


    return(
        <div className="login-form">
        <form>
            
            <FormControl>
                <TextField label="username" 
                name="username" 
                value={formData.username} 
                onChange={(event)=>setFormData({...formData,username:event.target.value})}
                className="form-field"
                />
            </FormControl>
            <br/>
            <FormControl >
                <TextField label="password" 
                name="password" 
                value={formData.password} 
                onChange={(event)=>setFormData({...formData,password:event.target.value})}
                className="form-field"
                />
            </FormControl>
            <br/>
            
            <button onClick={(event)=>validateDetails(event)} className="login-button">Log In</button>
        </form>
        </div>
    )
}


const Greeting =()=>{
    return(
        <div className="greeting">
            <p>Hi Again! Resume you journey!</p>
        </div>
    )
}


const Login = ()=>{
    return(
        <>
        <Header/>
        <div className="greeting-loginForm">
            <Greeting/>
            <LoginForm/>
        </div>
        </>
    )
}

export default Login;