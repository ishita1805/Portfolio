import React,{ useEffect, useState } from 'react'
import './sideNav.css'
import { useTranslation } from 'react-i18next';

const SideNav = () => {
    const [lang,setLang] = useState('en')
    const { t, i18n } = useTranslation();

    useEffect(() => {
       i18n.changeLanguage(lang);
    }, [i18n, lang])

    return (
        <div className='side-nav'>
            <p class='r-90'><a href="mailto:ishitakabra1805@gmail.com">{t('contact')}</a></p>
            <p class='m-r-3'>
                <span className={lang==='en'?'bold':null} onClick={()=>setLang('en')}>EN </span>
                 /
                <span className={lang==='fr'?'bold':null} onClick={()=>setLang('fr')}> FR</span>
            </p>
        </div>
    )
}

export default SideNav
