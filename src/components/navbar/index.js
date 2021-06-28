import React, { useState } from 'react'
import './nav.css'
import { NavLink as LinkRouter } from "react-router-dom";
import { Link } from "react-scroll";
// import navList from '../../data/homeNav'

const Navbar = ({navList,shadow,...props}) => {
    const [nav,setNavState] = useState(false);
    console.log(shadow);
    return (
        <>
        <div className="small-nav">
          <div className="nav-cross" onClick={()=>setNavState(!nav)}>
            <div className={nav?"new-1 cross":"cross"}></div>
            <div className="cross"></div>
            <div className={nav?"new-3 cross":"cross"}></div>
          </div>
        </div>

        <div className={nav?"Nav2":"Navigation"}>
            {
                navList.map((item)=>{
                    if(item.internal === 'true')
                    return <Link activeClass="active" to={item.id} spy={true} offset={0} smooth={true} duration={800}>
                                <span onClick={()=>setNavState(!nav)}>{item.label}</span>
                            </Link>

                    else return <LinkRouter className='navlink' to={item.id} exact>
                                    <span onClick={()=>setNavState(!nav)}>{item.label}</span>
                                </LinkRouter>
                })
            }
        </div> 

        <div className={`Navigation2 ${shadow?'nav-shadow':null}`}>
            {
                navList.map((item)=>{
                    if(item.internal === 'true')
                    return <Link activeClass="active" to={item.id} spy={true} offset={-57} smooth={true} duration={500}>
                                <span onClick={()=>setNavState(!nav)}>{item.label}</span>
                            </Link>

                    else return <LinkRouter className='navlink' to={item.id} exact>
                                    <span onClick={()=>setNavState(!nav)}>{item.label}</span>
                                </LinkRouter>
                })
            }
        </div> 
        </>
    )
}

export default Navbar
