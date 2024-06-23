import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const GoogleAuth = ({ onSuccess }) => {
  const responseGoogle = (response) => {
    axios.post('/api/users/google/callback', { code: response.code })
      .then(res => {
        const { token } = res.data;
        localStorage.setItem('token', token);
        onSuccess(token);
      })
      .catch(err => console.error(err));
  };

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <GoogleLogin
        onSuccess={responseGoogle}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleAuth;
