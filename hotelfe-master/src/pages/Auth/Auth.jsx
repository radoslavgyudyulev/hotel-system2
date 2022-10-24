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

import { login } from "_actions/auth";

import styles from "./Auth.scss";

const signInData = {
  username: "",
  email: "",
  password: "",
};



const Auth = () => {
  const [username, setUsername] = useState(signInData['username']);
  const [password, setPassword] = useState(signInData['password']);


  const [signUpMode, setSignUpMode] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const { pathname } = useLocation();
  const { push } = useHistory();
  const dispatch = useDispatch();

  console.log(message)

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      dispatch(
        login(username, password)
      );
      if (isLoggedIn) {
        push("/");
      }
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
        [styles.signUpMode]: signUpMode,
      })}
    >
      <div className={styles.formContainer}>
        <div className={styles.signinSignup}>
        <Form >
        <div style={{marginBottom: '15px'}}><h4>SIGN IN</h4></div>
       {message && <p style={{fontSize: '13px', color: 'red'}}>{message}</p>}

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="Enter Email" onChange={(event) => {
          setUsername(event.target.value)
        }}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password" onChange={(event) => {
          setPassword(event.target.value)
        }}/>
      </Form.Group>
      <Button variant="primary" onClick={handleLogin}>
        Sign in
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
