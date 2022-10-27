import React from 'react'
import { Navigate } from "react-router-dom";


function ProctectedComp({ token, children }) {
    if (!token) {
        return <Navigate to="/login" replace />;
    }
    return children;
}

export default ProctectedComp