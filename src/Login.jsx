import React, { useState } from "react";
import axios from "axios"; // Import Axios for making HTTP requests
import { useNavigate } from "react-router-dom"; // Import useHistory

// import { Button } from "react-bootstrap";
// import { Register } from "./Register";


export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate(); // Initialize useHistory

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send a POST request to your backend endpoint for user authentication
            const response = await axios.post('/api/login', { email, password });
            console.log(response.data); // Assuming your backend sends back some data upon successful login
            // Redirect to homepage after successful login
            history.push("/home");
            // Optionally, you can redirect the user to another page upon successful login
        } catch (error) {
            console.error("Login failed:", error);
            // Handle login failure (display error message, etc.)
        }
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    );
}
