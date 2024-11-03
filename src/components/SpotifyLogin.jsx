// src/components/SpotifyLogin.jsx
import React, { useEffect, useState } from 'react';
import SpotifyLoginBtn from './SpotifyLoginBtn';
import { getTokenFromUrl } from '../actions/spotify';
import PlaylistTracks from './PlaylistTracks';
import { Button } from '@mui/material';
import './SpotifyLogin.css';

const SpotifyLogin = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const tokenFromUrl = getTokenFromUrl();
    let storedToken = window.localStorage.getItem("token");

    if (!storedToken && tokenFromUrl.access_token) {
      window.localStorage.setItem("token", tokenFromUrl.access_token);
      setToken(tokenFromUrl.access_token);
      window.location.hash = "";
    } else {
      setToken(storedToken);
    }
  }, []);

  const handleLogout = () => {
    setToken(null);
    window.localStorage.removeItem("token");
  };

  return (
    <div className="spotify-login-container">
      <div className="header-container">
        {token ? (
          <>
            <h1>Welcome, you're logged in!</h1>
            <Button variant="contained" onClick={handleLogout}>LOGOUT</Button>
            <h1>Your Playlist Tracks</h1>
          </>
        ) : (
          <SpotifyLoginBtn />
        )}
      </div>
      {token && <PlaylistTracks token={token} />}
    </div>
  );
};

export default SpotifyLogin;
