import React,{ useState } from 'react'
import './sideNav.css'

const SideNav = () => {
    const [lang,setLang] = useState('En')
    return (
        <div className='side-nav'>
            <p class='r-90'><a href="mailto:ishitakabra1805@gmail.com">Contact</a></p>
            <p class='m-r-3'>
                <span className={lang==='En'?'bold':null} onClick={()=>setLang('En')}>EN </span>
                 /
                <span className={lang==='Fr'?'bold':null} onClick={()=>setLang('Fr')}> FR</span>
            </p>
        </div>
    )
}

export default SideNav
