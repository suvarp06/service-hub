import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Service(){
    return(
        <section className="features">
                <h2 className="section-title">available services</h2>
                <div className="feature-grid">
                    <div className="card">
                        <h3>Plumbing</h3>
                        <p>Installation and repair of water pipes,taps and drainage systems to ensure proper water flow and prevent leakage problems.</p>
                    </div>
                    <div className="card">
                        <h3>Carpentary</h3>
                        <p>Includes repair and installation of wooden furniture,doors,windows,cupboards and others.</p>
                    </div>
                    <div className="card">
                        <h3>Painting</h3>
                        <p>Includes interior and exterior wall painting,repainting,waterproof coating and decorative.</p>
                    </div>
                    <div className="card">
                        <h3>Electrical</h3>
                        <p>Maintenance of electrical wiring,switchs,poer sockets and other electrical appliances.</p>
                    </div>
                    <div className="card">
                        <h3>Appliances</h3>
                        <p>Technicians repair home appliances like washing machine,refrigerators,ovens and televisions</p>
                    </div>
                    <div className="card">
                        <h3>Gardening</h3>
                        <p>Includes lawn maintenance,plant care,trimming and landscaping to maintain outdoor space.</p>
                    </div>
                    <Link to="/login">Login</Link>
                </div>
        </section>
   );
}

function Login(){
    const [username, setUsername] = useState("")
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
            navigate("/dashboard",{state: {username:username}});
    };
    return(
        <div className="login-container">
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

                <button type="submit">Submit</button>
            </form>   
            </div>
        </div>
    );
}

function Dashboard(){
    const location = useLocation();
    const username = location.state?.username;
    const navigate = useNavigate();
    return(
        <div>
            <h2>
                <h2>WELCOME {username} </h2>
            </h2>
            <button type="button" onClick={() => window.location.href = "/"}>Logout</button>
            <button type="button" onClick={() => navigate(-1)}>Back</button>
        </div>
    );
}

export{ Service, Login, Dashboard };
