import React, { useState,useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Login(){
    const [username, setUsername] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
            navigate("/dashboard",{state: {username:username}});
    };
    return(
        
            <div className="login-box">
            <h6>Login page</h6>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br/><br/>
                <input
                    type="password"
                    placeholder="password"
                />
                <br/><br/>
                <input
                    type="email"
                    placeholder="Enter email"
                />
                <br/><br/>

                <button type="submit">Submit</button>
            </form>   
            </div>
        
    );
}
export default  Login ;
