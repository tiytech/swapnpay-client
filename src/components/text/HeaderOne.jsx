import React from 'react'

const HeaderOne = ({ text, classes, color, medium, align, size, bold, semibold }) => (
    <h1
        className={`
            ${classes}
            ${size ? size : 'text-[20px]'} 
            ${medium && 'font-medium'} 
            ${!semibold && !bold && 'font-normal'} 
            ${semibold && 'font-semibold'} 
            ${bold && 'font-bold'} 
            ${align ? align : ''}
            ${color && color}
        `}
    >{text}</h1>
)


export default HeaderOne