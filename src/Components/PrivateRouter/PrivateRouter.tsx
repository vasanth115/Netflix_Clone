import React from "react";
import { Navigate } from "react-router-dom";
import { useFormStore } from "../../Zustand/Store";

const PrivateRouter = ({  children } : TypeProps) => {
    const { islogin } = useFormStore();

    if (!islogin) {
        return <Navigate to='/login' />; 
    }
    return <>{children}</>; 
};

export default PrivateRouter;

type TypeProps = {
    children : React.ReactNode
}