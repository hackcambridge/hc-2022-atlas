import React from "react";
import {Link} from '@reach/router';
import './NavElement.css';

export type NavElementProps = {name: string; href: string};

export default function NavElement({name, href}: NavElementProps) {
    return (
        <Link to={href} className="NavElement">{name}</Link>
    );
};