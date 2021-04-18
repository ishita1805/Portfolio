/* eslint-disable react-hooks/exhaustive-deps */
import React,{ useEffect, useState } from 'react'
import './cursor.css'

const Cursor = () => {

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        addEventListeners();
        return () => removeEventListeners();
    }, []);

    const addEventListeners = () => {
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseenter", onMouseEnter);
        document.addEventListener("mouseleave", onMouseLeave);
    };

    const removeEventListeners = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseenter", onMouseEnter);
        document.addEventListener("mouseleave", onMouseLeave);
    };

    const onMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseLeave = () => {
        setHidden(true);
    };

    const onMouseEnter = () => {
        setHidden(false);
    };

   

    return (
        <>
        <div className={!hidden?'cursor':'cursor-hidden'}
            style={{
                left: `${position.x+5}px`,
                top: `${position.y+5}px`
            }}></div>
         <div className={!hidden?'cursor-inner':'cursor-hidden'}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`
            }}></div>
        </>
    )
}

export default Cursor
