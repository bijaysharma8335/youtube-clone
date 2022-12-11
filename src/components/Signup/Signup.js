import React, { useState } from "react";
import {
    Button,
    Checkbox,
    FormControlLabel,
    TextField,
} from "@material-ui/core";
import { auth } from "../../lib/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import "./Signup.css";

const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const Signup = ({ setShowSignUp }) => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState(initialFormData);
    const [checked, setChecked] = useState(false);

    const [passwordError, setPasswordError] = useState({
        state: false,
        msg: "",
    });
    const [emailError, setEmailError] = useState({
        state: false,
        msg: "",
    });

    const toggleSignUp = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setShowSignUp(false);
        }, 1500);
    };



    const createAccount = async (e) => {
        e.preventDefault();
        setLoading(true);
        const error = formData.password === formData.confirmPassword;
        if (!error) {
            setPasswordError({ state: true, msg: "Passwords do not match" });
            setFormData({ ...formData, confirmPassword: "" });
            setLoading(false);
            return;
        } else {
            setEmailError({
                state: false,
                msg: "",
            });
            setPasswordError({
                state: false,
                msg: "",
            });
        }

        //firbase function for signup user
        await createUserWithEmailAndPassword(
            auth,
            formData.email,
            formData.password
        )
            .then((userCredential) => {
                updateProfile(userCredential.user, {
                    displayName: `${formData.firstName}${formData.lastName}`,
                });
                setLoading(false);
                setEmailError({ state: false, msg: "" });
                setPasswordError({ state: false, msg: "" });
            })
            .catch((error) => {
                if (error.code === "auth/email-already-in-use") {
                    setEmailError({
                        state: true,
                        msg: "Email is already in use",
                    });
                    setLoading(false);
                    setFormData({ ...formData, email: "" });
                }
                if (error.code === "auth/invalid-email") {
                    setEmailError("Email address in not properly formatted");
                    setFormData({ ...formData, email: "" });
                    setLoading(false);
                } else if (error.code === "auth/weak-password") {
                    setPasswordError("Password should be atleast 6 characters");
                    setFormData({ ...formData, password: "", ConfirmPass: "" });
                    setLoading(false);
                }
            });
        // ..
    };
    const disabled =
        !formData.email ||
        !formData.password ||
        !formData.firstName ||
        !formData.lastName ||
        !formData.confirmPassword;

    return (
        <div className="signup_container">
            <div className={`signup${loading && "login_fade"}`}>
                {loading && <div className="login_loading signup_loading" />}

                <div className="signup_container">
                    <div className="signup_left">
                        <img
                            className="login__logo"
                            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                            alt="Google"
                        />
                        <h1 className="signup_heading">
                            Create Your Google Account
                        </h1>
                        <p className="signup_subheading">Continue to Gmail</p>
                        <div className="signup_inputs">
                            <div className="signup_nameInputs">
                                <TextField
                                    id="outlined-basic"
                                    label="First Name"
                                    variant="outlined"
                                    className="signup_nameInput"
                                    type="name"
                                    value={formData.firstName}
                                    required
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            firstName: e.target.value,
                                        })
                                    }
                                />
                                <TextField
                                    id="outlined-basic"
                                    label="Last Name"
                                    variant="outlined"
                                    className="signup_nameInput"
                                    type="name"
                                    required
                                    value={formData.lastName}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            lastName: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <TextField
                                id="outlined-basic"
                                label="Email"
                                type="email"
                                fullWidth
                                required
                                variant="outlined"
                                className="signup_nameInput"
                                helperText={
                                    emailError.state
                                        ? emailError.msg
                                        : "You can use letters, numbers & periods "
                                }
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: e.target.value,
                                    })
                                }
                                error={emailError.state}
                            />

                            <div className="signup_passwordInputs">
                                <div className="signup_passwordWrapper">
                                    <TextField
                                        id="outlined-basic"
                                        label="Password"
                                        required
                                        type={checked ? "text" : "password"}
                                        variant="outlined"
                                        className="signup_passwordInput"
                                        value={formData.password}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                password: e.target.value,
                                            })
                                        }
                                        error={passwordError.state}
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="Confirm Password"
                                        type={checked ? "text" : "password"}
                                        variant="outlined"
                                        required
                                        error={passwordError.state}
                                        className="signup_passwordInput"
                                        value={formData.confirmPassword}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                confirmPassword: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <p
                                    className={`signup_helpertext${
                                        passwordError.state && "signin_error"
                                    }`}
                                >
                                    {passwordError.state
                                        ? passwordError.msg
                                        : " Use 8 or more characters with a mix of letters ,numbers & symbols"}
                                </p>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            onClick={() => setChecked(!checked)}
                                            checked={checked}
                                            color="primary"
                                        />
                                    }
                                    label="show Password"
                                />
                            </div>
                            <div className="signup_buttons">
                                <Button
                                    className="signup_button"
                                    variant="text"
                                    color="primary"
                                    onClick={toggleSignUp}
                                >
                                    Sign in instead
                                </Button>
                                <Button
                                    className="signup_button"
                                    variant="contained"
                                    color="primary"
                                    onClick={createAccount}
                                    disabled={disabled}
                                >
                                    Create
                                </Button>
                            </div>
                        </div>
                    </div>
                    <figure className="signup_figure">
                        <img
                            className="signup__figureImg"
                            src="https://ssl.gstatic.com/accounts/signup/glif/account.svg"
                            alt="account"
                        />
                        <figcaption className="signup_figcaption">
                            One account .All of google working for you
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    );
};

export default Signup;
