import { useState } from 'react';
import { setAuthToken } from '../services/authenticate';
import axios from 'axios';
const Login = () => {
    const [user, setUser] = useState({ username: "", password: "" });

    const handleSubmit = () => {
        //reqres registered sample user
        axios.post("https://localhost:5001/api/authenticate/login", user)
            .then(response => {
                //get token from response
                const token = response.data.token;
                // //set JWT token to local
                 localStorage.setItem("Authorization", token);
                //redirect user to home page
                window.location.href = '/'
            })
            .catch(err => console.log(err));
    };
    return (
        <div>
            <form>
                <div className="form-group">
                    <label className='underline' htmlFor="username">User Name</label>
                    <input onChange={(e) => setUser({...user,["username"]:e.target.value})} type="text" className="form-control" id="username" placeholder="Enter user name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input onChange={(e) => setUser({...user,["password"]:e.target.value})}  type="password" className="form-control" id="password" placeholder="Password"/>
                </div>
                <button onClick={handleSubmit} type="button" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
export default Login;