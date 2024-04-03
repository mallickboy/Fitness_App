import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    
    return (        
        <div>
            <button className="" onClick={() => navigate("/signup")}> Signup </button>
            <button className=""> Login </button>            
        </div>
    )
}

export default Home