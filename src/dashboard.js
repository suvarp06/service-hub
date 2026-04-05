import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Service from './serv';
function Dashboard(){
    const location = useLocation();
    const username = location.state?.username;
    const navigate = useNavigate();
    return(
        <div>
                <h2>WELCOME {username} </h2>
            <button type="button" onClick={() => window.location.href = "/"}>Logout</button>
            <button type="button" onClick={() => navigate(-1)}>Back</button>
        </div>
       
    );
}

export default Dashboard;
