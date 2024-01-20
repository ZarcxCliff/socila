import React from "react";
import "../login/Login.css";

const Login = () => {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">cliffSocial</h3>
                    <span className="loginDesc">
                        connect with friends and the world around you on
                        cliffSocial.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <button className="loginButton">Log In</button>
                        <span className="loginforgot">Forgot Password</span>
                        <button className="loginRegistraterButton">
                            Create a New Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
