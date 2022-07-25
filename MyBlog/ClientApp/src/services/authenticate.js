import axios from 'axios';

const authenticate = axios.create({
    // .. where we make our configurations
        baseURL: 'https://localhost:5001/'
    });
    const token = localStorage.getItem('Authorization');
    if(token)
        authenticate.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    else
        authenticate.defaults.headers.common["Authorization"] = 'Bearer ';

export default authenticate;