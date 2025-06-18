import { useContext, useDebugValue } from "react"
import { AuthContext } from "../context"

export const useAuth=()=>{
    const {auth} = useContext(AuthContext);
    useDebugValue(auth,auth=>auth?.user?"USer Logged In":"User Logged Out");
    return useContext(AuthContext)
}