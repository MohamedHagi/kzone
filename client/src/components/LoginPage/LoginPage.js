import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  CircularProgress,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Input from "./Input";
import { GoogleLogin } from "react-google-login";
import { AUTH } from "../../constants/actionTypes";

import Icon from "./icon";
import { signin, signup } from "../../actions/auth.js";

/**
 * @author
 * @function LoginPage
 **/
const initialState = { firstName: "", lastName: "", email: "", password: "", confirmPassword: "" };

const LoginPage = (props) => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);
  const handleIsLoading = () => setIsLoading((prevIsLoading) => !prevIsLoading);
  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      props.signup(form, history);
    } else {
      props.signin(form, history);
      handleIsLoading();
    }
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    props.googleSignIn(result, token);
    try {
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const googleError = () => console.log("Google Sign In was unsuccessful. Try again later");

  console.log(props);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div style={{ position: "relative", marginTop: "100px", marginBottom: "50px" }}>
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h6">{isSignup ? "Sign Up" : "Sign In"}</Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {isSignup && (
                <>
                  <Input
                    name="firstName"
                    label="First Name"
                    handleChange={handleChange}
                    autoFocus
                    half
                  />
                  <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                </>
              )}
              <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
              <Input
                name="password"
                label="password"
                handleChange={handleChange}
                type={showPassword ? "text" : "password"}
                handleShowPassword={handleShowPassword}
              />
              {isSignup && (
                <Input
                  name="password"
                  label="Repeat Password"
                  handleChange={handleChange}
                  type={showPassword ? "text" : "password"}
                  handleShowPassword={handleShowPassword}
                />
              )}
            </Grid>
            {isLoading ? (
              <Button fullWidth variant="contained" color="primary" className={classes.submit}>
                <CircularProgress color="inherit" />
              </Button>
            ) : (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                {isSignup ? "Sign up" : "Sign in"}
              </Button>
            )}

            <GoogleLogin
              clientId="914101413857-9rvg8gs7e6j72qajgm05r5o1qljqqut7.apps.googleusercontent.com"
              render={(renderProps) => (
                <Button
                  className={classes.googleButton}
                  color="primary"
                  fullWidth
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  startIcon={<Icon />}
                  variant="contained"
                >
                  Google Sign In
                </Button>
              )}
              onSuccess={googleSuccess}
              onFailure={googleError}
              cookiePolicy="single_host_origin"
            />
            <Grid container justify="flex-end">
              <Grid item>
                <Button onClick={switchMode}>
                  {isSignup ? "Already have an account? Sign in" : "Don't have an account? Sign Up"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    post: state,
  };
};

const mapStateToDispatch = (dispatch) => {
  return {
    signin: (form, history) => dispatch(signin(form, history)),
    signup: (form, history) => dispatch(signup(form, history)),
    googleSignIn: (result, token) => dispatch({ type: AUTH, data: { result, token } }),
  };
};

export default connect(mapStateToProps, mapStateToDispatch)(LoginPage);
