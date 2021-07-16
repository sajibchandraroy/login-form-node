import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';


const LoginDashboard = () => {
    const [newUserRegistration, setNewUserRegistration] = useState(false);
    
    return (
        <div className="login">
            <div className="container m-4">
                <div className="custom-control custom-checkbox mb-4">
                    <input type="checkbox" className="custom-control-input" id="newaccount" onChange={() => setNewUserRegistration(!newUserRegistration)} />
                    <label className="custom-control-label" for="newaccount">New User Registration</label>
                </div>
                <div className="row">
                    {newUserRegistration ?
                        <div className="col-lg-12 card p-3 border-warning">
                            <SignUp />
                        </div>
                        :
                        <div className="col-lg-8 card p-3 border-warning" >
                            <Login />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default LoginDashboard;