import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import "./Login.css";
import Signup from "./../Signup/Signup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [showSignUp, setShowSignUp] = useState(false);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [passwordError, setPasswordError] = useState({
        state: false,
        msg: "",
    });
    const [emailError, setEmailError] = useState({
        state: false,
        msg: "",
    });
    const navigate = useNavigate();
    const toggleSignUp = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setShowSignUp(true);
        }, 1500);
    };

    const handleSignin = (e) => {
        e.preventDefault();
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                console.log(userCredential);
                setEmailError({
                    state: false,
                    msg: "",
                });
                setPasswordError({
                    state: false,
                    msg: "",
                });
                navigate("/");
            })
            .catch((err) => {
                setLoading(false);

                if (err.code === "auth/wrong-password") {
                    setEmailError({ state: false, msg: "" });
                    setPasswordError({
                        state: true,
                        msg: "Incorrect password",
                    });
                } else if (
                    err.code === "auth/user-not-found" ||
                    err.code === "auth/invalid-email"
                ) {
                    setEmailError({ state: true, msg: "Email Dosen't exsist" });
                    setPasswordError({ state: false, msg: "" });
                }
            });
    };
    return (
        <div className="login ">
            {showSignUp ? (
                <Signup setShowSignUp={setShowSignUp} />
            ) : (
                <div className="login_content">
                    {loading && <div className="login_loading" />}
                    <div className={`login_wrapper${loading && "login_fade"}`}>
                        <img
                            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                            alt="Google"
                            className="login_logo"
                        />
                        <p className="login_title">Sign in</p>
                        <p className="login_subtitle">Continue to Gmail</p>
                        <form className="login_form">
                            <TextField
                                id="outlined-basic"
                                label="Email"
                                variant="outlined"
                                className="login_input"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                error={emailError.state}
                                helperText={emailError.msg}
                            />
                            <TextField
                                id="outlined-basic"
                                label="Password"
                                variant="outlined"
                                className="login_input"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                error={passwordError.state}
                                helperText={passwordError.msg}
                            />
                            <div className="login_infoText">
                                Not your computer? Use guest mode to sign in
                                privately?
                                <a href="/learnmore">Learn More</a>
                            </div>
                            <div className="login_buttons">
                                <Button
                                    className="login_button"
                                    color="primary"
                                    onClick={toggleSignUp}
                                >
                                    Create Account
                                </Button>
                                <Button
                                    className="login_button"
                                    color="primary"
                                    variant="contained"
                                    onClick={handleSignin}
                                >
                                    Sign in
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}{" "}
        </div>
    );
};

export default Login;
