import React from 'react';
import './Sponsors.css';

export type SponsorsProps = {
    name: string;
    className: string
};

export default function Sponsors({name, className}: SponsorsProps) {
    return (
        <div className={className}>
            This is the section of name {name}
        </div>
    );
}