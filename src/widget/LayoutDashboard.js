import React from "react";
import NavbarDashboard from "../component/NavbarDashboard";
import Sidebar from "../component/Sidebar";

const LayoutDashboard = (props) => {
    return(
        <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800">
            <div className="flex items-start justify-between">
                <Sidebar />
                <div className="flex flex-col w-full md:space-y-4">
                    <header className="z-40 flex items-center justify-between w-full h-16">
                        <NavbarDashboard/>
                    </header>
                    <div className="h-screen px-4 pb-24 overflow-auto md:px-6">
                        {props.children}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default LayoutDashboard