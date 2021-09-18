import React from 'react';
import './Landing.css';

export type LandingProps = {
    name?: string;
    className?: string
};

/**
 * Landing Section
 */
export default function Landing({name, className}: LandingProps) {
    return (
        <div className={className || "Landing"}>
            This is the section of name {"Landing"}
        </div>
    );
}