import React from "react";
import { Outlet } from "react-router-dom";

const Auth = () => {
    return (
        <div className=" min-h-screen bg-[#6064FF] ">
            <Outlet />
        </div>
    );
};

export default Auth;
