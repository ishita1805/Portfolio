import React, { useState } from 'react'
import './nav.css'
import { Link } from "react-scroll";

const Navbar = ({ navList, shadow, ...props }) => {
    const [nav, setNavState] = useState(false);
    return (
        <>
            <div className="small-nav">
                <div className="nav-cross" onClick={() => setNavState(!nav)}>
                    <div className={nav ? "new-1 cross" : "cross"}></div>
                    <div className="cross"></div>
                    <div className={nav ? "new-3 cross" : "cross"}></div>
                </div>
            </div>
        {/* small screen */}
            <div className={nav ? "Nav2" : "Navigation"}>
                {
                    navList.map((item) => {
                        if (item.internal === 'true')
                            return <Link activeClass="active" to={item.id} spy={true} offset={0} smooth={true} duration={1000}>
                                <span onClick={() => setNavState(!nav)}>{item.label}</span>
                            </Link>

                        else return <a target='__blank' className='navlink' href={item.id} exact>
                            <span onClick={() => setNavState(!nav)}>{item.label}</span>
                        </a>
                    })
                }
            </div>
                {/* big screen */}
            <div className={`Navigation2 ${shadow ? 'nav-shadow' : null}`}>
                {
                    navList.map((item) => {
                        if (item.internal === 'true')
                            return <Link activeClass="active" to={item.id} spy={true} offset={-57} smooth={true} duration={1000}>
                                <span >{item.label}</span>
                            </Link>

                        else return <a target='__blank' className='navlink' href={item.id} exact>
                            <span onClick={() => setNavState(!nav)}>{item.label}</span>
                        </a>
                    })
                }
            </div>
        </>
    )
}

export default Navbar
