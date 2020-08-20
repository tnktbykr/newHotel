import React from 'react'
import "./banner.css"
import { Link } from "react-router-dom";

export default function Banner(props) {
    const { title, subtitle } = props;
    return (
        <div className="banner">
            <h1>{title}</h1>
            <div></div>
            <p>{subtitle}</p>
            <Link to="/rooms" className="btn-primary">
                Odalarımız
            </Link>
        </div>
    )
}
