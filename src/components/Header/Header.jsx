import './Header.scss'
import { Link } from 'react-router-dom';
import { Roles } from '../../enums/roles';
import { useLocation } from 'react-router-dom';

const Header = ({ isAuth, userSession, exitAccountHandler }) => {

    return (
        isAuth && (
            <div className='header'>
                <div className="header__links">
                    {
                    userSession.role === Roles.recruiter && (
                            <>
                                <div className="header__link">
                                    <Link to="/">Post Job</Link>
                                </div>
                                <div className="header__link">
                                    <Link to="/myJobs">My Job List</Link>
                                </div>
                            </>
                        )
                    }
                    {
                        userSession.role === Roles.worker && (
                            <div className="header__link">
                                <Link to="/jobs">Job List</Link>
                            </div>
                        )
                    }
                    {
                        (
                            <div className="header__link">
                            <Link to="/auth" onClick={exitAccountHandler}>Exit</Link>
                        </div>              
                        )
                    }
            
                </div>
            </div>
        )
  )
}

export default Header