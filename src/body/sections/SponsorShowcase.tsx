import React from 'react';
import './SponsorShowcase.css';

export type SponsorShowcaseProps = {
    name: string;
    className: string
};

export default function SponsorShowcase({name, className}: SponsorShowcaseProps) {
    return (
        <div className={className}>
            This is the section of name {name}
        </div>
    );
}