import { Link, useLocation } from "react-router-dom";

import { useState } from "react";
import Sidebar from "./Sidebar";

import { faHome, faList, faCog} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
    const [showSidebar, setShowSidebar] = useState(false)
    const location = useLocation()
    const links = [
        {
            name: "Kezdőoldal",
            path: "/",
            icon: faHome
        },
        {
            name: "Receptek",
            path: "/recipes",
            icon: faList
        },
        {
            name: "Beállítások",
            path: "/settings",
            icon: faCog
        }
    ]

    function closeSidebar() {
        setShowSidebar(false)
    }

    return (
        <>
            <div className="navbar container">
                <Link to="/" className="logo">FecaF<span>oo</span>d</Link>
                <div className="nav-links">
                    { links.map(link => (
                        <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>{link.name}</Link>
                    )) }
                </div>
                <div onClick={() => setShowSidebar(!showSidebar)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            { showSidebar && <Sidebar close={closeSidebar} links={links} /> }
        </>
    )
}