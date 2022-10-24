import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { Form, Input } from "components/_shared";

import { register, login } from "../../_actions/auth";

import styles from "./Registration.scss";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessful(false);
    dispatch(register(username, email, password))
      .then((response) => {
        console.log("test");
        console.log({ response });
        setSuccessful(true);
      })
      .catch(() => {
				setSuccessful(false);
				return
      })
      .finally(() => {
        setLoading(false);
        dispatch(login(username, password));
        history.push("/");
      });
  };

  return (
    <Form
      className={styles.formContainer}
      inputsWithValidations={{
        email: {
          value: email,
          validate: ["requiredValidation", "emailValidation"],
        },
        username: {
          value: username,
          validate: ["requiredValidation"],
        },
        password: {
          value: password,
          validate: ["requiredValidation", "passwordValidation"],
        },
        confirmPassword: {
          value: password,
          secondValue: confirmPassword,
          validate: ["requiredValidation", "matchPasswords"],
        },
      }}
      onSubmit={handleSubmit}
      loading={loading}
    >
      {(errors) => (
        <div className={styles.inputsContainer}>
					{message}
          <Input
            placeholder="Email"
            value={email}
            onChange={setEmail}
            errors={errors["email"]}
          />
          <Input
            placeholder="Username"
            value={username}
            onChange={setUsername}
            errors={errors["username"]}
          />
          <Input
            placeholder="Password"
            value={password}
            onChange={setPassword}
            errors={errors["password"]}
          />
          <Input
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={setConfirmPassword}
            errors={errors["confirmPassword"]}
          />
        </div>
      )}
    </Form>
  );
};

export default Registration;
