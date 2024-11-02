// src/components/SpotifyLoginBtn.jsx
import { Button } from '@mui/material';
import React from 'react';
import { loginUrl } from '../actions/spotify'; // Ensure the import path is correct

export default function SpotifyLoginbtn() {
  return (
    <Button href={loginUrl} variant="contained">
      LOGIN
    </Button>
  );
}