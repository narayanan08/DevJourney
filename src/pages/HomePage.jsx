import {Link} from "react-router-dom";
import RightArrow from "../assets/right-arrow.svg";

const Header =()=>{
    return (
    <div className="header">
        <div>
            <Link to="/" className="logo">DevJourney</Link>
        </div>
        <div className="login-signup">
            <Link to="/login" className="login">Login</Link>
            <Link to="/signup" className="signup">Sign Up</Link>
        </div>
    </div>
    )
}

const Introduction = ()=>{
    return(
        <>
        <div className="introduction-main">
            We will guide you in Web Development
        </div>
        <div className="introduction-sub">
            You can try out the challenges we posted on 
            this website to understand how to use the 
            following technologies: HTML, CSS, Javascript, 
            React and Typescript. By doing these challenges we 
            hope you will learn these technologies and set you a 
            path to develop many more applications in future.
        </div>
        </>
    )
}


const ProjectBox =(props)=>{
    const {projectName} = props;

    return (
        <>
        <div className="projectBox">
            <p>{projectName}</p>
        </div>
        </>
    )
}
const Track = ()=>{
    return(
        <div className="track">
            <ProjectBox projectName="Currency Convertor"/>
            <img src={RightArrow} alt="right-arrow" className="right-arrow"/>
            <ProjectBox projectName="Expense Tracker"/>
            <img src={RightArrow} alt="right-arrow" className="right-arrow"/>
            <ProjectBox projectName="Amazon Clone"/>
            <img src={RightArrow} alt="right-arrow" className="right-arrow"/>
            <ProjectBox projectName="Blog Management System"/>
            <img src={RightArrow} alt="right-arrow" className="right-arrow"/>
            <ProjectBox projectName="Habit Tracker"/>
        </div>
    )
}

const HomePage = ()=>{
    return(
        <>
            <Header/>
            <Introduction/>
            <Track/>
        </>
    )
}

export default HomePage;