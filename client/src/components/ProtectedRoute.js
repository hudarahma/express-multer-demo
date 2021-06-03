import { Route } from "react-router-dom";
import Login from "../pages/Login";

const ProtectedRoute = ({component: Component, ...rest}) => {
    return <Route 
        {...rest} 
        render={ ()=> {
            let token = sessionStorage.getItem('token');
            
            if (token) return <Component />;
            return <Login />;
        }} 
    />
};

export default ProtectedRoute;