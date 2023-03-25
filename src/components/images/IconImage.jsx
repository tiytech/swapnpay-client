import React from 'react'

const IconImage = ({ icon, classes }) => {
    return (
        <img
            alt="icon"
            src={icon}
            className={`w-5 h-5 ${classes}`}
        />
    )
}

export default IconImage