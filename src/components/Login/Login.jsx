import './Login.scss'
import { useState } from 'react'
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';

const Login = ({ signInHandler }) => {
    const [loginData, setLoginData] = useState({
        nickname: '',
        password: ''
    });

  return (
    <div>
        <div className="auth__title">
            Sign in
        </div>
        <div className="auth__input">
            <Input 
                type='text'
                placeholder='Nickname'
                value={loginData.nickname}
                setValue={(e) => setLoginData({...loginData, nickname: e.target.value})}
                label="Nickname"
            />
        </div>
        <div className="auth__input">
            <Input 
                type='password'
                placeholder='Password'
                value={loginData.password}
                setValue={(e) => setLoginData({...loginData, password: e.target.value})}
                label="Password" 
            />
        </div>
        <div className="auth__buttons">
            <Button
                text="Login"
                onClick={() => { signInHandler(loginData) }}
                disabled={!(loginData.nickname && loginData.password)}
            />
        </div>
    </div>
  )
}

export default Login