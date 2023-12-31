import React from "react";
import './sign-and-sign-up.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from "../../components/sign-up/sign-up.component";

const signInAndSignUp = () => (
    <div className="sign-and-sign-up">
        <SignIn />
        <SignUp />
    </div>
)

export default signInAndSignUp;