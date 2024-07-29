import {Link} from "react-router-dom";
import { useState } from "react";
import { FormControl, InputLabel, Input, TextField } from "@mui/material";

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
    const [formData,setFormData] = useState({
        username:"",
        password:"",
    })
    
    const validateDetails = (detail,field)=>{
        
    }

    const saveLoginDetails = (event)=>{
        event.preventDefault();
        console.log(formData.username);
        console.log(formData.password);
    }

    return(
        <div className="login-form">
        <form action={saveLoginDetails}>
            
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
            
            <button onClick={validateDetails} className="login-button">Log In</button>
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