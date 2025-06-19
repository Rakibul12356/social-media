
import NavBar from '../components/Navbar/NavBar';
import { useAuth } from '../hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';
import ProfileProviders from '../providers/ProfileProviders';

const PrivateRoutes = () => {

    const { auth } = useAuth()
    return (
        <>
            {
                auth.user ? (
                    <>
                        <ProfileProviders>
                            <NavBar />
                            <main className='mx-auto max-w-[1020px] py-8'>
                                <div className='container'>
                                    <Outlet />
                                </div>
                            </main>
                        </ProfileProviders>
                    </>

                ) : (
                    <Navigate to="/login" />
                )
            }

        </>
    );
};

export default PrivateRoutes;