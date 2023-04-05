import React from "react";
import './header.css'
import { useNavigate } from "react-router-dom";

const Header=()=>{
    const navigate = useNavigate();
    const handleClick=()=>{
        navigate("/")
    }

    const gotoDash=()=>{
        navigate("/showData")
    }
    return(
        <>
            <header className="header">
                <span className="header_content" onClick={handleClick}>unlock.fit</span>
                <span className="dashboard" onClick={gotoDash}>dashboard</span>
            </header>
        </>
    )
}
export default Header;