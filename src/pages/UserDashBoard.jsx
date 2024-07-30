import {Link, useParams} from "react-router-dom";
import styled from 'styled-components';

const CardStyler = styled.div`

`

const ProgessBarContainer = styled.div`
`;



const Header = () => {

    const{userid} = useParams();
    console.log(userid);
    const userDashBoardLink = "/userDashBoard/"+userid;
    console.log(userDashBoardLink);
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

const statusNoticeMap = {
    completed : "You completed this project",
    blocked : "You will unlock this project after completing the current project"
}

const resumeMessage = {
    completed: "Click to start again",
    onProgress : "Click to continue"
}

const ProjectCard = (props) => {
    const {projectName,progress, status, stepNumber} = props;
    return(
        <>  
            <div>
                <h1>projectName</h1>
                <h2>{statusNoticeMap[status] || `You are at step ${stepNumber}`}</h2>
                <h3>{resumeMessage[status] || ""}</h3>
            </div>
            <div>
                <h2>Progress:</h2>
                 
            </div>
        </>
    )
}

const UserDashBoard = ()=>{
    return(
        <>
        <Header/>
        </>
    )
}

export default UserDashBoard;