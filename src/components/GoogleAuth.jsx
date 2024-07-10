import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleAuth = ({ onSuccess, onFailure }) => {
    const clientId = 'YOUR_GOOGLE_CLIENT_ID'; // Replace with your actual client ID

    const handleSuccess = (response) => {
        console.log('Login Success:', response);
        onSuccess(response);
    };

    const handleFailure = (error) => {
        console.error('Login Failure:', error);
        onFailure(error);
    };

    return (
        <GoogleLogin
        clientId={clientId}
        buttonText="Login with Google"
        onSuccess={handleSuccess}
        onFailure={handleFailure}
        cookiePolicy={'single_host_origin'}
        />
    );
};

export default GoogleAuth;
