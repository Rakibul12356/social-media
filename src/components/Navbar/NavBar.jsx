import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../../assets/icons/home.svg'
import notificationIcon from '../../assets/icons/notification.svg'


import Logout from '../auth/Logout';
import { useAuth } from '../../hooks/useAuth';
import { useProfile } from '../../hooks/useProfile';
const NavBar = () => {
  const { auth } = useAuth();
  const { state } = useProfile()
const user = state?.user ?? auth?.user;
console.log(user)


  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-[#3F3F3F] bg-[#1E1F24] py-4">
        <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">

          <div>
            <h1 className='text-2xl text-green-400 font-bold '>Face-Hook</h1>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/" className="btn-primary">
              <img src={homeIcon} alt="Home" />
              Home
            </Link>
            <button className="icon-btn">
              <img src={notificationIcon} alt="Notification" />
            </button>
            <Logout />

            <Link to="/me">
              <button className="flex-center !ml-8 gap-3">
                <span className="text-lg font-medium lg:text-xl">{user?.firstName} {' '} { user?.lastName}</span>
                <img className="max-h-[32px] rounded-full max-w-[32px] lg:max-h-[44px] lg:max-w-[44px]"
                  src={`${import.meta.env.VITE_SERVER_BASE_URL}/${user.avatar}`} alt="" />
              </button></Link>
          </div>

        </div>
      </nav>

    </>
  );
};

export default NavBar;