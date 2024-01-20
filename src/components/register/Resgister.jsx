import React from "react";
import "../register/Register.css";

const Register = () => {
    return (
        <div className="Register">
            <div className="RegisterWrapper">
                <div className="RegisterLeft">
                    <h3 className="RegisterLogo">cliffSocial</h3>
                    <span className="RegisterDesc">
                        connect with friends and the world around you on
                        cliffSocial.
                    </span>
                </div>
                <div className="RegisterRight">
                    <div className="RegisterBox">
                        <input
                            placeholder="Username"
                            className="RegisterInput"
                        />
                        <input placeholder="Email" className="RegisterInput" />
                        <input
                            placeholder="Password"
                            className="RegisterInput"
                        />
                        <input
                            placeholder="Password Again"
                            className="RegisterInput"
                        />
                        <button className="RegisterButton">Sign Up</button>

                        <button className="RegisterRegistraterButton">
                            Log Into Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
