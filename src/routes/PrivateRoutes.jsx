import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import PostProvider from "../providers/PostProvider";
import NavBar from "../components/Navbar/NavBar";
import ProfileProviders from "../providers/ProfileProviders";

const PrivateRoutes = () => {
    const { auth } = useAuth();

    return (
        <>
            {auth.authToken ? (
                <>
                    <PostProvider>
                        <ProfileProviders>
                          <NavBar/>
                            <main className="mx-auto max-w-[1020px] py-8">
                                <div className="container">
                                    <Outlet />
                                </div>
                            </main>
                        </ProfileProviders>
                    </PostProvider>
                </>
            ) : (
                <Navigate to="/login" />
            )}
        </>
    );
};

export default PrivateRoutes;