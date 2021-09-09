import React from "react";
import './NavElement.css';

export type NavElementProps = {name: string; href: string};

export default function NavElement({name, href}: NavElementProps) {
    return (
        <a href={href} className="NavElement">{name}</a>
    );
};