import React, { useState, useEffect } from "react";
import { useLocation, useHistory, Redirect } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import pussyDriver from "assets/icons/pussyDriver.svg";
import electricCar from "assets/icons/electricCar.svg";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



import AuthField from "./AuthField/AuthField";

import { register, login } from "_actions/auth";
import { clearMessage } from "_actions/messages";


import styles from "./Auth.scss";

const signInData = {
  username: "",
  password: "",
};



const Auth = () => {
  const [username, setUsername] = useState(signInData['username']);
  const [password, setPassword] = useState(signInData['password']);
  const [email, setEmail] = useState(signInData['email']);



  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  console.log('message', message)

  const { pathname } = useLocation();
  const { push } = useHistory();
  const dispatch = useDispatch();

  const redirectTo = async () => {
    await  dispatch(clearMessage());
    push("/auth/signin");
  }


  const handleRegister = async (e) => {
    e.preventDefault();
    try {
     await  dispatch(register(username,email, password, redirectTo));
     
  
    } catch (error) {
      console.log(error);
    }

  };

  

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }



  return (
    <div
      className={classNames({
        [styles.container]: true,
        // [styles.signUpMode]: signUpMode,
      })}
    >
      <div className={styles.formContainer}>
        <div className={styles.signinSignup}>
        <Form >
            <div style={{marginBottom: '15px'}}><h4>SIGN UP</h4></div>
       {message && <p style={{fontSize: '13px', color: 'red'}}>{message}</p>}

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="Enter Email" onChange={(event) => {
          setUsername(event.target.value)
        }}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" onChange={(event) => {
          setEmail(event.target.value)
        }}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password" onChange={(event) => {
          setPassword(event.target.value)
        }}/>
      </Form.Group>
      <Button variant="primary" onClick={handleRegister}>
        Sign up
      </Button>
    </Form>
        </div>
      </div>

      <div className={styles.panelsContainer}>
        <div className={classNames(styles.panel, styles.leftPanel)}>
          <img src={pussyDriver} className={styles.image} alt="" />
        </div>
        <div
          className={classNames({
            [styles.panel]: true,
            [styles.rightPanel]: true,
          })}
        >
         
          <img src={electricCar} className={styles.image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Auth;
