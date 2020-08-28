import React from 'react';
import './Table.css';
export const TableHeading = (props) => {
    return <p className="TableHeading">{props.children}</p>
}

export const TableContent = (props) => {
    return <p className="TableContent">{props.children}</p>
}

export const Caption = (props) => {
    return <caption className="Caption">{props.children}</caption>
}
