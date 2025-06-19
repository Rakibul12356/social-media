import React from 'react';
import { useAuth } from '../../hooks/useAuth';

const Home = () => {
    const {auth}=useAuth();
    console.log(auth)
    return (
        <div>
         this is home
          
        </div>
    );
};

export default Home;