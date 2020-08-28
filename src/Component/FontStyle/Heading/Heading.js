import React from 'react';
import './Heading.css'
export const H1 = (props) => {
    return(<h1 className="h1tag">{props.children}</h1>)
}

export const H2 = (props) => {
    return(<h2 className="h2tag">{props.children}</h2>)
}

export const H3 = (props) => {
    return(<h3 className="h3tag">{props.children}</h3>)
}

export const H4 = (props) => {
    return(<h4 className="h4tag">{props.children}</h4>)
}

export const H5 = (props) => {
    return(<h5 className="h5tag">{props.children}</h5>)
}

export const H6 = (props) => {
    return(<h6 className="h6tag">{props.children}</h6>)
}

export const TitleText = (props) => {
    return(<h1 class="TitleText">{props.children}</h1>)
}