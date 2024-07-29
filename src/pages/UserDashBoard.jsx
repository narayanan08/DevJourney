import {Link, useParams} from "react-router-dom";

const Header =()=>{

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

const UserDashBoard = ()=>{
    return(
        <>
        <Header/>
        </>
    )
}

export default UserDashBoard;