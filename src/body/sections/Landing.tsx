import React from 'react';
import './Landing.css';

export type LandingProps = {
    name: string;
    className: string
};

/**
 * Example Section
 */
export default function Landing({name, className}: LandingProps) {
    return (
        <div className={className}>
            This is the section of name {name}
        </div>
    );
}