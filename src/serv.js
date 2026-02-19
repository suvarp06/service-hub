function Service(){
    return(
        <section className="features">
                <h2 className="section-title">available services</h2>
                <div className="feature-grid">
                    <div className="card">
                        <h3>Plumbing</h3>
                        <p>p1,p2,p3</p>
                    </div>
                    <div className="card">
                        <h3>carpentary</h3>
                        <p>c1,c2,c3</p>
                    </div>
                    <div className="card">
                        <h3>Painting</h3>
                        <p>pn1,pn2,pn3</p>
                    </div>
                    <div>
                        <center>
                        <h1>user login</h1>
                        <label>username:</label><br/>
                        <input type="text" placeholder="Enter Name"/><br/>
                        <label>password:</label><br/>
                        <input type="password" placeholder="Enter Password"/><br/>
                        <button className="btn btn-primary">Login</button>
                        </center>
                    </div>
                </div>
        </section>
   );
}
export default Service;