
import './App.css';
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import SignUp from "./pages/Signup";
import Login from './pages/Login';
import UserDashBoard from './pages/UserDashBoard';
import ProjectPage from './pages/ProjectPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/userdashboard" element={<UserDashBoard/>}/>
          <Route path="/projects" element={<ProjectPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
