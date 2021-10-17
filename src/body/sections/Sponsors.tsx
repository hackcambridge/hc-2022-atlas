import React from 'react';
import HexGrid from '../components/HexGrid';
import './Sponsors.scss';

export type Sponsor = {
    name: string,
    tier: 'Cohost'|'Tera'|'Giga'|'Mega'|'Kilo',
    image: string,
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
            <HexGrid className={"hex-cohost"} info={[{
                title: cohost.name,
                caption: cohost.name,
                image: cohost.image,
                visible: true
            }]} layoutInfo={{nHexaBig: 1, nHexaMed: 1, baseSize:"30vw"}}/>
            <h2>Tera</h2>
            <HexGrid info={tera.map(sponsor => {return {
                title: sponsor.name,
                caption: sponsor.name,
                image: sponsor.image,
                visible: true
            }})} layoutInfo={{nHexaBig: 3, nHexaMed: 3, baseSize:"70vw"}}/>
            <h2>Giga</h2>
            <HexGrid info={giga.map(sponsor => {return {
                title: sponsor.name,
                caption: sponsor.name,
                image: sponsor.image,
                visible: true
            }})} layoutInfo={{nHexaBig: 5, nHexaMed: 5, baseSize:"60vw"}}/>
            <h2>Mega</h2>
            <HexGrid info={mega.map(sponsor => {return {
                title: sponsor.name,
                caption: sponsor.name,
                image: sponsor.image,
                visible: true
            }})} layoutInfo={{nHexaBig: 5, nHexaMed: 5, baseSize:"60vw"}}/>
            <h2>Kilo</h2>
            <HexGrid info={kilo.map(sponsor => {return {
                title: sponsor.name,
                caption: sponsor.name,
                image: sponsor.image,
                visible: true
            }})} layoutInfo={{nHexaBig: 5, nHexaMed: 5, baseSize:"60vw"}}/>
        </div>
    );
}