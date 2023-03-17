import React from 'react'


const HeaderText = ({ text, color, classes }) => {
    return (
        <h1
            className={`
                ${color}
                ${classes}
                font-spacegrotesk
            `}
        >
            {text}
        </h1>
    )
}

export default HeaderText