import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
export type ISignUp = Record<string, string>;

const SignUp = () => {
  let history = useHistory();
  const { handleSubmit, register, errors, setError } = useForm();

  const onSubmit = async (values: ISignUp) => {
    console.log("submitting")
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
        <button type="submit">Test</button>

      </form>
    </div>
  );
};

export default SignUp;
