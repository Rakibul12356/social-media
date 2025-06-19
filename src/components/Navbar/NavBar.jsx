import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../../assets/icons/home.svg'
import notificationIcon from '../../assets/icons/notification.svg'
import avaterIcon from "../../assets/images/avatars/avatar_1.png"

import Logout from '../auth/Logout';
import { useAuth } from '../../hooks/useAuth';
const NavBar = () => {
  const {auth}=useAuth();
  console.log(auth.user)
  const firstName= auth?.user?.firstName
  const lastName= auth?.user?.lastName
  const name = firstName +" "+ lastName
  const profileIcon = auth?.user?.avatar
  console.log(profileIcon)



    return (
        <>
        <nav className="sticky top-0 z-50 border-b border-[#3F3F3F] bg-[#1E1F24] py-4">
    <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
 
      <div>
        <h1 className='text-2xl text-green-400 font-bold '>Face-Hook</h1>
      </div>

      <div className="flex items-center space-x-4">
        <a href="./index.html" className="btn-primary">
          <img src={homeIcon}alt="Home" />
          Home
        </a>
        <button className="icon-btn">
          <img src={notificationIcon}alt="Notification" />
        </button>
       <Logout/>

       <Link to="/me">
        <button className="flex-center !ml-8 gap-3">
          <span className="text-lg font-medium lg:text-xl">{name}</span>
          <img className="max-h-[32px] max-w-[32px] lg:max-h-[44px] lg:max-w-[44px]"
            src={avaterIcon} alt="" />
        </button></Link>
      </div>
 
    </div>
  </nav>
            
        </>
    );
};

export default NavBar;