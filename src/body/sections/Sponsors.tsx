import React from 'react';
import './Sponsors.scss';

export type Sponsor = {
    name: string,
    tier: 'Cohost'|'Tera'|'Giga'|'Mega'|'Kilo',
    href: string,
    isPlaceHolder: boolean
};

export type SponsorsProps = {
    cohost: Sponsor;
    tera: Sponsor[];
    giga: Sponsor[];
    mega: Sponsor[];
    kilo: Sponsor[];
};

export default function Sponsors({cohost, tera, giga, mega, kilo}: SponsorsProps) {
    return (
        <div className="Sponsors">
            <h1>Our Sponsors</h1>
            <h2>Cohost</h2>

            <h2>Tera</h2>
            <h2>Giga</h2>
            <h2>Mega</h2>
            <h2>Kilo</h2>
        </div>
    );
}