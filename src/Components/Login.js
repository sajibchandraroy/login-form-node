import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import googleimage from '../Components/Images/Login/google-icon.png'


const Login = () => {
    const [forgetPassword, setForgetPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const user = [{
        email: '',
        password: '',
    }]

    const handleBlur = (e) => {
        if (e.target.name === 'email') {
            const email = /\S+@\S+\.\S+/.test(e.target.value);
            if (email)
                user.email = e.target.value
        }

        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            const password = isPasswordValid && passwordHasNumber;
            if (password) {
                user.password = e.target.value
            }
        }
    }

    const handleSubmit = (e) => {
        if (!forgetPassword && user.email && user.password) {
            fetch(`http://localhost:5000/users/${user.email}/${user.password}`)
        }
        if (!forgetPassword && !user.email) {
            alert("please fill email input properly")
        }
        if (!forgetPassword && !user.password) {
            alert("Password must be six digit or more with at least one number")
        }
        e.preventDefault();
    }

    const googleSignIn = () => {
        // handleGoogleSignIn()
        //     .then(res => {
        //         props.handleResponse(res, true);
        //     })
    }



    return (
        <div>
            <div className="login-form">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <label>E-mail / Username</label>
                            <input className="form-control" type="text" name="email" placeholder="E-mail / Username" onBlur={handleBlur} />
                        </div>
                        {!forgetPassword &&
                            <div className="col-md-6">
                                <label>Password</label>
                                <div className="input-group">
                                    <input className="form-control" type={!showPassword ? "password" : "text"} name="password" placeholder="Password" onBlur={handleBlur} /><div className="input-group-text"><span onClick={() => setShowPassword(!showPassword)}><FontAwesomeIcon icon={!showPassword ? faEyeSlash : faEye} /></span></div>
                                </div>
                            </div>}
                        <div className="col-md-12">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" onChange={() => setForgetPassword(!forgetPassword)} className="custom-control-input" id="forgetpassword" />
                                <label className="custom-control-label" for="forgetpassword">Forget Password</label>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <button className="btn mt-4 border-dark text-danger">Submit</button>
                        </div>
                    </div>
                </form>
                <button onClick={googleSignIn} className="btn mt-4 border-dark text-info"><img src={googleimage} style={{ width: 20, height: 20 }} alt="" />Continue with Google</button>
            </div>
        </div>

    );
};

export default Login;