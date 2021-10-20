import React from 'react';
import HexGrid from '../components/HexGrid';
import './Sponsors.scss';
import Fade from 'react-reveal';

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
    // TODO: create useWindowSize hook
    return (
        <div className="Sponsors">
            <h1>Our Sponsors</h1>
            <h2>Cohost</h2>
            <Fade left>
            <HexGrid className={"hex-cohost"} info={[{
                title: cohost.name,
                caption: cohost.name,
                image: cohost.image,
                visible: !cohost.isPlaceHolder,
                href: cohost.href
            }]} layoutInfo={{nHexaBig: 1, nHexaMed: 1, baseSize:(window.innerWidth < 600)? "100vw": "30vw"}}/>
            </Fade>
            <h2>Tera</h2>
            <Fade right>
            <HexGrid info={tera.map(sponsor => {return {
                title: sponsor.name,
                caption: sponsor.name,
                image: sponsor.image,
                visible: !sponsor.isPlaceHolder,
                href: sponsor.href
            }})} layoutInfo={{nHexaBig: 3, nHexaMed: 3, baseSize:(window.innerWidth < 600)? "100vw": "70vw"}}/>
            </Fade>
            <h2>Giga</h2>
            <Fade left>
            <HexGrid info={giga.map(sponsor => {return {
                title: sponsor.name,
                caption: sponsor.name,
                image: sponsor.image,
                visible: !sponsor.isPlaceHolder,
                href: sponsor.href
            }})} layoutInfo={{nHexaBig: 3, nHexaMed: 3, baseSize:(window.innerWidth < 600)? "100vw": "60vw"}}/>
            </Fade>
            <h2>Mega</h2>
            <Fade right>
            <HexGrid info={mega.map(sponsor => {return {
                title: sponsor.name,
                caption: sponsor.name,
                image: sponsor.image,
                visible: !sponsor.isPlaceHolder,
                href: sponsor.href
            }})} layoutInfo={{nHexaBig: 3, nHexaMed: 3, baseSize:(window.innerWidth < 600)? "100vw": "50vw"}}/>
            </Fade>
            <h2>Kilo</h2>
            <Fade left>
            <HexGrid info={kilo.map(sponsor => {return {
                title: sponsor.name,
                caption: sponsor.name,
                image: sponsor.image,
                visible: !sponsor.isPlaceHolder,
                href: sponsor.href
            }})} layoutInfo={{nHexaBig: 5, nHexaMed: 5, baseSize:(window.innerWidth < 600)? "100vw": "60vw"}}/>
            </Fade>
        </div>
    );
}