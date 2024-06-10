import { Navigate, Outlet } from "react-router-dom"

const PrivateRoutes = (props) => {
    let auth = { 'token': !!localStorage.getItem('accessToken') }

    return(
        auth.token ? <Outlet /> : <Navigate to='/login' />
    )
}

export default PrivateRoutes;