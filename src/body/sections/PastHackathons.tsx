import React from 'react';
import './PastHackathons.css';

export type PastHackathonsProps = {
    name: string;
    className: string
};

export default function PastHackathons({name, className}: PastHackathonsProps) {
    return (
        <div className={className}>
            This is the section of name {name}
        </div>
    );
}