import React from "react";
import './Header.css';
import Logo from "../components/Logo";
import Nav from "../components/Nav";
import { NavElementProps } from "../components/NavElement";

export type HeaderProps = {
    logoPath: string
    navElements: Array<NavElementProps>;
};

export default function Header({ logoPath, navElements }: HeaderProps) {
    return (
        <header>
            <Logo logo={logoPath}/>
            <Nav elements={navElements} />
        </header>
    );
}