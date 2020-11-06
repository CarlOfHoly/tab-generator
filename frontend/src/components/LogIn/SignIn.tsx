import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import ThemedButton from "../ThemedButton";
import { ISignUp } from "./SignUp";
import { login } from "../../auth"

const SignIn = () => {
  const history = useHistory();
  const { handleSubmit, register, errors, /* setError  */} = useForm();

  const onSubmit = async (values: ISignUp) => {
    console.log(JSON.stringify(values));

    fetch("http://localhost:5000/api/login", {
      method: "post",
      body: JSON.stringify(values)
    }).then(res => res.json())
      .then(token => {
        if (token.jwt){
          login(token);
          history.push("/")
      }
        else {console.log("Incorrect user login")}
      })
  }

  return (
    <div>
      <div className="form-container sign-in-container">
        <form className="signInForm" onSubmit={handleSubmit(onSubmit)}>
          <h1>Sign in</h1>
          {/* <div className="social-container">
            <a href="https://www.spotify.com/no/" className="social">
              <img src={SpotifyLogo} alt="spotify logo"></img>
            </a>
          </div>
          <span>or use your account</span>*/}
          <input
            name="username"
            className="usernameSignInInput"
            type="text"
            placeholder="username"
            ref={register({
              required: "Required",
            })}
          />
          {errors.username && errors.username.message}

          <input
            name="password"
            className="passwordSignInInput"
            type="password"
            placeholder="password"
            ref={register({
              required: "Required",
            })}
          />
          {errors.password && errors.password.message}

          <a href="https://bfy.tw/PIXi">Forgot your password?</a>
        <ThemedButton type="submit">Test</ThemedButton>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
