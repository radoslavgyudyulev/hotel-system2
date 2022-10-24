import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

import { register } from "../../_actions/auth";

import { Form, Input } from "components/_shared";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");


  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();
  const { push } = useHistory();

  const handleRegister = (e) => {
    e.preventDefault();
    try {
      dispatch(register(username,email, password));
    //   push("/");
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
      onSubmit={handleRegister}
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
            placeholder="Email"
            value={email}
            onChange={setEmail}
            errors={errors["email"]}
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

export default Register;
