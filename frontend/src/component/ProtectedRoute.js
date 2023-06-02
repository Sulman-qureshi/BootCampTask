import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {
    
    const auth = localStorage.getItem('token');

    return auth ? <Outlet /> : <Navigate to="Login" />
}
export default ProtectedRoute;