// src/components/SpotifyLoginBtn.jsx
import React from 'react';
import { Button } from '@mui/material';
import { loginUrl } from '../actions/spotify';

const SpotifyLoginBtn = () => {
  return (
    <Button href={loginUrl} variant="contained">
      LOGIN
    </Button>
  );
};

export default SpotifyLoginBtn;
