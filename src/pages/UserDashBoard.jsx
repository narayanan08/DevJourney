import {Link, useParams} from "react-router-dom";
import styled from 'styled-components';

const statusNoticeMap = {
    finished : "You completed this project",
    blocked : "You will unlock this project after completing the current project"
}

const resumeMessage = {
    finished: "Click to start again",
    current : "Click to continue",
    blocked : "Click to start"
}

const cardStatusColorMap={
    finished:'rgb(131,208,15)',
    current:'rgba(9, 214, 200, 0.911)',
    blocked:'rgb(255, 111, 0)'
}

const projectAccessButtonColorMap={
    finished:'rgb(160,248,15)',
    current:'rgba(0, 250, 255,1)',
    blocked:"none"

}

const projectAccessButtonHoverColorMap={
    finished:'rgba(160,248,15,0.5)',
    current:'rgba(0, 250, 255,0.5)',
    blocked:"none"
}
const CardStyler = styled.div`
    background-color: ${(props)=>cardStatusColorMap[props.status]};
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    margin:20px 20px 20px 20px;
    border-style: solid;
    display: flex;
    justify-content: space-around;
    width:600px;
    border-radius:20px;
    border-style:none;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);

`
const ProjectTitle = styled.p`
    color:white;
    font-size:32px;
    margin-bottom:-10px;
`

const ProjectStatusNotice = styled.p`
    color:white;
    
`
const ProgessBarContainerHeader = styled.div`
    padding-top:40px;
    font-size:25px;
    color:white;
`;

const ProgressBarContainer = styled.div`
border:solid;
height:10px;
margin-top:5px;


`

const ProgresSoFar = styled.div`
    width:${(props)=>props.progress+"%"};
    height:100%;
    background-color:rgb(175, 255, 55);
 ;
`

const ProjectAccessButton = styled.button`
border:none;
background-color:${(props)=>projectAccessButtonColorMap[props.status]};
font-size:20px;
padding:10px;
color:${(props)=>(props.status !== 'blocked'?'rgb(102, 0, 102)':"grey")} ;
margin-bottom:20px;
border-radius:20px;
box-shadow:0px 2px 5px rgba(0, 0, 0, 0.2);
// transistion:background-color 2.0s ease-in-out, transform 0.3s ease-in;

&:hover{
    cursor:${(props)=>(props.status==='blocked'?'auto':'pointer')};
    background-color: ${(props)=>projectAccessButtonHoverColorMap[props.status]};
}
`

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



const ProjectCard = (props) => {
    const {projectName,progress, status, stepNumber} = props;
    return(
        <CardStyler status={status}>  
            <div className="projectStatus">
                <ProjectTitle>{projectName}</ProjectTitle>
                <ProjectStatusNotice>{statusNoticeMap[status] || `You are at step ${stepNumber}`}</ProjectStatusNotice>
                {/* <ProjectAccessButton>{resumeMessage[status] || ""}</ProjectAccessButton> */}
                {/* {status !== 'blocked'? <ProjectAccessButton status={status}>{resumeMessage[status]}</ProjectAccessButton>:""} */}
                 <ProjectAccessButton status={status}>{resumeMessage[status]}</ProjectAccessButton>

            </div>
            <div>
                
                <ProgessBarContainerHeader>Progress:</ProgessBarContainerHeader>
                <ProgressBarContainer>
                    <ProgresSoFar progress={progress} />
                </ProgressBarContainer>
                    
            </div>
        </CardStyler>
    )
}

const UserDashBoard = ()=>{
    return(
        <>
        <Header/>
        <div className="projectCards">
        <ProjectCard projectName={"Currency Convertor"} progress={100} status={"finished"} stepNumber={1}/>
        <ProjectCard projectName={"Expense Tracker"} progress={50} status={"current"} stepNumber={3}/>
        <ProjectCard projectName={"Amazon Clone"} progress={0} status={"blocked"} stepNumber={-1}/>
        </div>
        </>
    )
}

export default UserDashBoard;