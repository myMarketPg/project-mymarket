import React from "react";
import { Link } from "react-router-dom";
import style from './Button.module.css';

export default function Button () {
    return (
        <Link to = '/'><button className = {style.btn}>Return Home</button></Link>
    )
}