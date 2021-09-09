import React from "react";
import './SignUpButton.css';

export type SignUpButtonProps = {
    href: string
};

export default function SignUpButton({href}: SignUpButtonProps) {
    return (
        <a href={href} className="SignUp">Sign up</a>
    );
}