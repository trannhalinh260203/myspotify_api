//src/actions/spotify.js
export const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;;
export const REDIRECT_URI = 'http://localhost:3000/';
export const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
export const RESPONSE_TYPE = 'token'; // or 'code' based on your use case

export const SCOPES = [
    'user-library-read',
    'playlist-read-private',
    'user-read-private',
    'user-read-email',
    'playlist-read-collaborative',
    'user-top-read',
].join(' ');

// Define and export loginUrl
export const loginUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${encodeURIComponent(SCOPES)}`;

// Function to extract the access token from the URL
export function getTokenFromUrl() {
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item)=>{
        let parts = item.split('=');
        initial[parts[0]]=decodeURIComponent(parts[1]);
        return initial;
    },{});
}