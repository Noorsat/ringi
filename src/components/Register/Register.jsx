import  { useState } from 'react';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';
import { Roles } from '../../enums/roles';

const Register = ({ createUserHandler, setMode }) => {
    const [registerData, setRegisterData] = useState({
        nickname: '',
        password: '',
        confirmPassword: '',
        role: ''
    });
        
    return (
        <div>
            <div className="auth__title">
                Sign up
            </div>
            <div className="auth__input">
                <Input 
                    type='text'
                    placeholder='Nickname'
                    value={registerData.nickname}
                    setValue={(e) => setRegisterData({...registerData, nickname: e.target.value})}
                    label="Nickname"
                />
            </div>
            <div className="auth__input">
                <Input 
                    type='password'
                    placeholder='Password'
                    value={registerData.password}
                    setValue={(e) => setRegisterData({...registerData, password: e.target.value})}
                    label="Password" 
                />
            </div>
            <div className="auth__input">
                <Input 
                    type='password'
                    placeholder='Confirm Password'
                    value={registerData.confirmPassword}
                    setValue={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})}
                    label="Confirm Password" 
                />
            </div>
            <div className="auth__buttons">
                <Button
                    text="Sign up as a recruiter"
                    onClick={() => { createUserHandler({...registerData, id: Date.now(), role: Roles.recruiter }); setMode('login') }}
                    disabled={!(registerData.nickname && registerData.password && registerData.password === registerData.confirmPassword)}
                />
                <Button 
                    text="Sign up as a worker"
                    onClick={() => { createUserHandler({...registerData, id: Date.now(), role: Roles.worker }); setMode('login')}}
                    disabled={!(registerData.nickname && registerData.password && registerData.password === registerData.confirmPassword)}
                />
            </div>
    </div>
  )
}

export default Register