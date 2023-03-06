import React, { Component } from 'react';
import '../styles/LoginStyle.css';

class Login extends Component {

    render() {
        return (
            <div className='main-body'>
                <h1>Form Login</h1>
                <div className='form-login'>
                    <h1 className='title'>Tugas Pertemuan Ketiga</h1>
                    <div className='form-line'>
                        <label className='label-style'>Username</label>
                        <input type='text' placeholder='Username' className='input-style'/>
                    </div>
                    <div className='form-line'>
                        <label className='label-style'>Password</label>
                        <input type='password' placeholder='Password'className='input-style' />
                    </div>
                    <div>
                        <button className='btn-login'>Login</button>
                    </div>
                    <div>
                        <input type='checkbox' />
                        <label>Remember Me</label>

                    </div>
                    <div>
                    <button className='btn-cancel'>Cancel</button></div>
                </div>
            </div>
        );
    }
}

export default Login;