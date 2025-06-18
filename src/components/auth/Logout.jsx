import React from 'react';
import logOutIcon from '../../assets/icons/logout.svg'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
const Logout = () => {
    const navigate=useNavigate()
    const {setAuth}=useAuth()
    const handleLogOut = ()=>{
        setAuth({})
        navigate('/login')
    }
    return (
        <>
            <button className="icon-btn" onClick={handleLogOut}>
                <img src={logOutIcon} alt="Logout" />
            </button>
        </>
    );
};

export default Logout;