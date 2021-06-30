import React from 'react'

const Scroll = (props) => {
    return (
        <div onClick={props.onClick} className={props.hide?'hide-ic':'move-up-icon'}>
            <i className='fa fa-chevron-up'></i>
        </div>
    )
}

export default Scroll
