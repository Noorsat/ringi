import './App.css'
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Auth from './pages/Auth/Auth'
import Main from './pages/Main/Main';
import Jobs from './pages/Jobs/Jobs';
import Header from './components/Header/Header';
import { notification } from 'antd';
import { Roles } from './enums/roles';
import RecruiterJobs from './pages/RecruiterJobs/RecruiterJobs';

function App() {
  const [users, setUsers] = useState([]);
  const [userSession, setUserSession]  = useState({});
  const [isAuth, setIsAuth] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [responces, setResponces] = useState([]);

  const navigate = useNavigate();

  console.log(users);
  console.log(jobs);
  console.log(responces);

  useEffect(() => {
    if (!isAuth){
      navigate('/auth');
    }
  }, [isAuth])
  
  const addJobHandler = (job) => {
    setJobs([...jobs, {...job, id: Date.now(), userId: userSession.id}]);
    notification["success"]({
      message: "Succusfully create vacancy"
    })
  }

  const addResponseHandler = (response) => {
    setResponces([...responces, {...response, id: Date.now()}])
    notification["success"]({
      message: "Succesfully pass response"
    })
  }

  const createUserHandler = (user) => {
    const userCheck = users.filter(u => u.nickname === user.nickname);
    
    if (userCheck.length == 0){
      setUsers([...users, {...user, id: Date.now()}]);
      notification["success"]({
        message: "Succesfully create user"
      })
    }else{
      notification["error"]({
        message: "User with this nickname already registered"
      })
    }
   
  }

  const exitAccountHandler = () => {
    setIsAuth(false);
    setUserSession({});
    navigate("/auth");
  }
  
  const signInHandler = (user) => {
    const selectedUser = users.filter(u => u.nickname == user.nickname)[0];

    if (!selectedUser){
      notification['error']({
        message: "User with this nickname not created"
      })
    }else if (selectedUser.password != user.password){
      notification["error"]({
        message: "Wrong password"
      })
    }else{
      notification["success"]({
        message: "Sign in..."
      })
      if (selectedUser.role === Roles.recruiter){
        navigate('/');
      }else if (selectedUser.role === Roles.worker){
        navigate('/jobs');
      }
      setUserSession(selectedUser);
      setIsAuth(true);
    }
  }

  return (
    <>
        {
          <Header 
            isAuth={isAuth} 
            userSession={userSession}
            exitAccountHandler={exitAccountHandler}
          />
        }
        <Routes>
          <Route path="/" element={<Main addJobHandler={addJobHandler} />} />
          <Route path='auth' element={<Auth createUserHandler={createUserHandler} signInHandler={signInHandler} />} />
          <Route path='jobs' element={<Jobs jobs={jobs} addResponseHandler={addResponseHandler} />} />
          <Route path='myJobs' element={<RecruiterJobs jobs={jobs.filter(job => job.userId == userSession.id)} responces={responces} />} />
        </Routes>
    </>
  )
}

export default App
