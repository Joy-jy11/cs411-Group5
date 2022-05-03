import React from 'react';
import Grid from "@material-ui/core/Grid";
import { useGoogleLogin } from 'react-google-login';
import { useNavigate } from 'react-router-dom';

// refresh token
import { refreshTokenSetup } from './refreshToken';

const clientId =
  ''; //need to type in manually

function LoginHooks() {
  let navigate = useNavigate();

  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert( `Logged in successfully welcome ${res.profileObj.name}.`);
    refreshTokenSetup(res);
    navigate('/main');
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login.`
    );
  };
  /*
  function handleClick() {
    navigate('/GetMovie');
  }
  */
  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <Grid container justify="center">
    <button onClick={signIn} className="button">
       <img src="icons/btn_google_signin_dark_normal_web.png" alt="Sign in" className="icon"></img>
    </button>
    </Grid>
  );
}

export default LoginHooks;

