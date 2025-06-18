
import NavBar from '../components/Navbar/NavBar';
import { useAuth } from '../hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
  
    const{auth}=useAuth()
    return (
        <>
        {
            auth.user?(
                <main className='mx-auto max-w-[1020px] py-8'>
                    <div className='container'>
                        <NavBar/>
                        <Outlet/>
                    </div>
                </main>
            ):(
                <Navigate to="/login" />
            )
        }
            
        </>
    );
};

export default PrivateRoutes;