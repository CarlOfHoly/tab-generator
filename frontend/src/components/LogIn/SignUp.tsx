import React from "react";
import { useForm } from "react-hook-form";
// import { useHistory } from "react-router-dom";
import ThemedButton from "../ThemedButton"
export type ISignUp = Record<string, string>;

const SignUp = () => {
  // let history = useHistory();
  const { handleSubmit, register, errors, /* setError  */} = useForm();

  const onSubmit = async (values: ISignUp) => {
    fetch("http://localhost:5000/api/register", {
      method: "post",
      body: JSON.stringify(values)
    }).then(res => res.json())
      .then(data => console.log(data))
  };

  return (
    <div className="form-container sign-up-container">
      <form className="signUpForm" onSubmit={handleSubmit(onSubmit)}>
        <h1>Create Account</h1>
        <input
          name="username"
          className="usernameSignUpInput"
          type="text"
          placeholder="username"
          ref={register({
            required: "Required",
          })}
        />
        {errors.username && errors.username.message}

        <input
          name="password"
          className="passwordSignUpInput"
          type="password"
          placeholder="password"
          ref={register({
            required: "Required",
          })}
        />
        {errors.password && errors.password.message}
        <ThemedButton type="submit">Test</ThemedButton>

      </form>
    </div>
  );
};

export default SignUp;
