import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { login } from "../../_actions/auth";

import { Form, Input } from "components/_shared";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();
  const { push } = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      dispatch(login(username, password));
      push("/");
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <Form
      inputsWithValidations={{
        username: { value: username, validate: ["requiredValidation"] },
        password: {
          value: password,
          validate: ["requiredValidation", "passwordValidation"],
        },
      }}
      onSubmit={handleLogin}
    >
      {(errors) => (
        <>
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
        </>
      )}
    </Form>
  );
};

export default Login;
