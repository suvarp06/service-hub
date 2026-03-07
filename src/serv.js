import React, { useRef, useEffect } from "react";
import Login from "./login";

function Service(){
    const scrollRef = useRef(null);
    useEffect(() => {
        const container = scrollRef.current;
        const scrollInterval = setInterval(() => {
            if(container){
            container.scrollTop += 1;

            if (container.scrollTop >= container.scrollHeight - container.clientHeight){
                container.scrollTop=0;
            }
            }
        }, 30);
        return () => clearInterval(scrollInterval); 
    }, []);
    return(

        <section className="features">
             <div className="main-container">
                <div className="service-section">
                    <h2> AVAILABLE SERVICES</h2>
                < div ref={scrollRef} className="scroll-box">
                
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
                </div>  
                </div>
                <div classname="login-section">
                <Login/>
                </div>
                </div>
                
        </section>
   );
}
export default Service;
