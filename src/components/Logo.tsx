import React from "react";
import './Logo.css';

export type LogoProps = {
    logo: string
};

export default function Logo({logo}: LogoProps) {
    return (
        <div className="Logo">
            <img src={logo} className="HC-logo" alt="logo" />
            <h1>Hack Cambridge Atlas</h1>
        </div>
    );
}