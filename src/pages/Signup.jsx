import {Link} from "react-router-dom";
import { FormControl, InputLabel, Input, TextField } from "@mui/material";
import { useState } from "react";
const Header=()=>{

    return (
    <div className="header">
        <div>
            <Link to="/" className="logo">DevJourney</Link>
        </div>
        <div className="login-signup">
            <Link to="/login" className="login">Login</Link>
        </div>
    </div>
    )
    
}

const SignInForm=()=>{
    const [formData,setFormData] = useState({
        name:"",
        username:"",
        password:"",
        confirmPassword:""
    })
    
    const validateDetails = (detail,field)=>{
        
    }

    const saveLoginDetails = (event)=>{
        event.preventDefault();
        console.log(formData.name);
        console.log(formData.username);
        console.log(formData.password);
        console.log(formData.confirmPassword);
    }

    return(
        <div className="login-form">
        <form action={saveLoginDetails}>
            <FormControl className="formControl">
                <TextField label="name" 
                name="name" 
                value={formData.name} 
                onChange={(event)=>setFormData({...formData,name:event.target.value})}
                className="form-field"/>
            </FormControl>
            <br/>
            <FormControl className="formControl">
                <TextField label="username" 
                name="username" 
                value={formData.username} 
                onChange={(event)=>setFormData({...formData,username:event.target.value})}
                className="form-field"/>
            </FormControl>
            <br/>
            <FormControl className="formControl">
                <TextField label="password" 
                name="password" 
                value={formData.password} 
                onChange={(event)=>setFormData({...formData,password:event.target.value})}
                className="form-field"/>
            </FormControl>
            <br/>
            <FormControl className="formControl">
                <TextField label="Confirm Password" 
                name="Confirm-password" 
                value={formData.confirmPassword} 
                onChange={(event)=>setFormData({...formData,confirmPassword:event.target.value})}
                className="form-field"/>
            </FormControl>
            <br/>
            <button onClick={validateDetails} className="register-button">Register</button>
        </form>
        </div>
    )
}


const Greeting =()=>{
    return(
        <div className="greeting">
            <p>Welcome to DevJourney! Start your web development journey!</p>
        </div>
    )
}

const Signup = ()=>{
    return(
        <>
            <Header/>
            <div className="greeting-signUpForm">
                <Greeting/>
                <SignInForm/>
            </div>
        </>
    )
}

export default Signup;