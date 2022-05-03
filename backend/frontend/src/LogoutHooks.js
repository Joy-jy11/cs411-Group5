import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import { useNavigate } from 'react-router-dom';

const clientId =
  ''; //need to type in manually

function LogoutHooks() {
  let navigate = useNavigate();
  const onLogoutSuccess = (res) => {
    console.log('Logged out Success');
    alert('Logged out Successfully');
    navigate('/');
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button onClick={signOut} className="button">
      <img src="icons/Sign_out.PNG" alt="Sign out" className="icon"></img>
    </button>
  );
}

export default LogoutHooks;
