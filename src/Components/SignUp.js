import React, { useState } from 'react';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    let data = {}

    const handleBlur = (e) => {        
        let isFieldValid ;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        else if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        else if (e.target.name === 'confirmPassword') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber && e.target.value === data.password;            
        }

        else if (e.target.name === 'firstName' || e.target.name === 'lastName' || e.target.name === 'location' || e.target.name === 'email') {
            isFieldValid = true;
        }
        if (isFieldValid) {
            data[e.target.name] = e.target.value
        }
    }
    const handleSubmit = (e) => {        
        if(data.password && data.confirmPassword)   {
            console.log(data)
            var myJSON = JSON.stringify(data);
            console.log(myJSON)
            fetch("http://localhost:5000/users/signUp", {
                method: 'POST',
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                 },                
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        } 
        else if(!data.confirmPassword){
            alert("password not same")
        }
            
        e.preventDefault();
    }

    return (
        <div>
            <div className="register-form">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-3">
                            <label>First Name</label>
                            <input className="form-control" type="text" name="firstName" placeholder="First Name" onBlur={handleBlur} required />
                        </div>
                        <div className="col-md-3">
                            <label>Last Name</label>
                            <input className="form-control" type="text" name="lastName" placeholder="Last Name" onBlur={handleBlur} required />

                        </div>
                        <div className="col-md-3">
                            <label for="usersLocation">Location</label>
                            <input className="form-control" type="text" name="location" placeholder="Your address" onBlur={handleBlur} required />

                        </div>
                        {/* <div className="col-md-3">
                            <label for="usersMenuField">Upload your photo</label>
                            <input className="form-control" type="file" name="photo" placeholder="Photo" onBlur={handleBlur} required />

                        </div> */}
                        <div className="col-md-4 my-3">
                            <label>E-mail</label>
                            <input className="form-control" type="text" name="email" placeholder="E-mail" onBlur={handleBlur} required />

                        </div>

                        <div className="col-md-3 my-3">
                            <label>Password</label>
                            <div className="input-group">
                                <input className="form-control" type={!showPassword ? "password" : "text"} name="password" placeholder="Password" onBlur={handleBlur} />
                                <div className="input-group-text"><span onClick={() => setShowPassword(!showPassword)}><FontAwesomeIcon icon={!showPassword ? faEyeSlash : faEye} /></span></div>

                            </div>
                        </div>
                        <div className="col-md-3 my-3">
                            <label>Retype Password</label>
                            <div className="input-group">
                                <input className="form-control" type={!showPassword ? "password" : "text"} name="confirmPassword" placeholder="Password" onBlur={handleBlur} required />
                                <div className="input-group-text"><span onClick={() => setShowPassword(!showPassword)}><FontAwesomeIcon icon={!showPassword ? faEyeSlash : faEye} /></span></div>

                            </div>
                        </div>

                        <div className="col-md-12">
                            <button className="btn mt-4 border-dark text-danger">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div >

    );
};

export default SignUp;