import { useState } from 'react';
    import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register'
import Button from '../../ui/Button/Button';
import './Auth.scss';

const Auth = ({ createUserHandler, signInHandler }) => {
    const [mode, setMode] = useState('login');

    return (
        <div className='auth'>
            <div>
                <div className="auth__buttons-header">
                    <Button 
                        text="Login"
                        width={220}
                        onClick={() => setMode('login')}
                    />
                    <Button 
                        text="Register"
                        width={220}
                        onClick={() => setMode('register')}
                    />
                </div>
                {
                    mode == 'login' && (
                        <Login
                            signInHandler={signInHandler} 
                        /> 
                    )  
                }
                {
                    mode == 'register' && ( 
                        <Register 
                            createUserHandler={createUserHandler}
                            setMode={setMode}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Auth