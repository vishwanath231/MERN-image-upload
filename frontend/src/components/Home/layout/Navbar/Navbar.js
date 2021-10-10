import React,{ useState, useEffect } from 'react';
import { NavLink }  from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    const [navScroll, setNavScroll] = useState(false);

    const handleNavScroll = () => {
        const scroll = window.scrollY

        if (scroll > 20) {
            setNavScroll(true)
        }else{
            setNavScroll(false)
        }
    }


    useEffect(() => {
        
        window.addEventListener("scroll", handleNavScroll)
        
    }, [])



    return (
        <>
            <div className={ navScroll ? "nav__container active" : "nav__container" }>
                <div className="nav">
                    <div className={ navScroll ? "logo active" : "logo" }>
                        GALLERY
                    </div>
                    <ul>
                        <li><NavLink exact activeClassName="btn__active" className={ navScroll ? "link active" : "link" } to="/">Home</NavLink></li>
                        <li><NavLink activeClassName="btn__active" className={ navScroll ? "link active" : "link" } to="/form">Upload</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;
