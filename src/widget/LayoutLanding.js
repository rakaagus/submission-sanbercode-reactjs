import React from "react";
import Navbar from "../component/navbar";

const LayoutLanding = (props) => {
    return (
        <>
            <Navbar />
            {props.children}
        </>
    )
}

export default LayoutLanding