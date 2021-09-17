import React from 'react';
import './AboutUs.css';

export type AboutUsProps = {
    name: string;
    className: string
};

export default function AboutUs({name, className}: AboutUsProps) {
    return (
        <div className={className}>
            This is the section of name {name}
        </div>
    );
}