import React from 'react';
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="site">
            <nav className="site-nav">
                <div className="brand">ServiceHub</div>
                
            </nav>

            <main className="hero">
                <div className="hero-content">
                    <h1>Manage services effortlessly</h1>
                    <p className="lead">Centralize requests, track progress, and delight customers.</p>
                    
                </div>
                <div className="hero-visual" aria-hidden>
                    <div className="placeholder-illustration">🚀</div>
                </div>
            </main>

            <section className="features">
                <h2 className="section-title">Why ServiceHub</h2>
                <div className="feature-grid">
                    <div className="card">
                        <h3>Fast setup</h3>
                        <p>Get up and running in minutes with sensible defaults.</p>
                    </div>
                    <div className="card">
                        <h3>Real-time updates</h3>
                        <p>Keep stakeholders informed with live status and notifications.</p>
                    </div>
                    <div className="card">
                        <h3>Secure</h3>
                        <p>Role-based access and audit logs for enterprise needs.</p>
                    </div>
                </div>
            </section>       
             <footer className="site-footer">© {new Date().getFullYear()} ServiceHub</footer> 
             <div>
                <Link to="/service">Click to see available services</Link>
                
             </div>   
        </div>
    );
}

export default Home;