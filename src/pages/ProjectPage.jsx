import { Button } from "@mui/material";
import {Link, useParams, useLocation} from "react-router-dom";

const projectSteps = {
    "step1":{
        "disabled":"False",
        "description":"This is Step 1",
        "hint1":"This is hint 1",
        "hint2":"This is hint 2",
        "Answer":"This is answer",
        "Output":"Sample output image comes here"
    },
    "step2":{
        "disabled":"True",
        "description":"This is Step 2",
        "hint1":"This is hint 1",
        "hint2":"This is hint 2",
        "Answer":"This is answer",
        "Output":"Sample output image comes here"
    }
}

const Header = () => {
    const location = useLocation();
    const{userid} = useParams();
    const userDashBoardLink = "/userDashBoard/"+userid;
    return (
    <div className="header">
        <div>
            <Link to="/" className="logo">DevJourney</Link>
        </div>
        <div className="login-signup">
            <Link to={userDashBoardLink} className="username"> Username</Link>
            <Link to="/" className="signup">Log Out</Link>
        </div>
    </div>
    )
}

const StepButton = (props)=>{
    const {disabled} = props;
    return (
        <>
            <button></button>
        </>
    )
}

const StepDescription = (props)=>{
    const {description} = props;
    return (
        <div>
            {description}
        </div>
    )
}

const Hint = (props) =>{
    const {hint} = props;
    return (
        <div>
            {hint}
        </div>
    )
}

const Answer = (props)=>{
    const {answer} = props;
    return (
        <div>
            {answer}
        </div>
    )
}

const UploadAnswerButton = (props)=>{
    const {answer}=props;
    return(
        <button>
            Upload the screenshot of your output to compare
        </button>
    )
}
const ProjectPage = () => {
    const steps = Object.keys(projectSteps);

    return (
        <>
            <Header/>

        </>
    )
}

export default ProjectPage;
