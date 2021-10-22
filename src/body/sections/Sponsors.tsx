import React from 'react';
import HexGrid from '../components/HexGrid';
import './Sponsors.scss';
import Fade from 'react-reveal';
import { useWindowResize } from '../../shared/util/useWindowResize';

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
    // eslint-disable-next-line
    const {width, height} = useWindowResize();
    return (
        <div className="Sponsors" id="sponsors">
            <h1>Our Sponsors</h1>
            <h2>Cohost</h2>
            <Fade left>
            <HexGrid className={"hex-one-only"} info={[{
                title: cohost.isPlaceHolder? "Coming soon": cohost.name,
                caption: cohost.isPlaceHolder? "Coming soon": cohost.name,
                image: cohost.image,
                visible: true,
                href: cohost.href
            }]} layoutInfo={{nHexaBig: 1, nHexaMed: 1, nHexaSmall: 1, baseSize:(width < 600)? "80vw": "30vw"}}/>
            </Fade>
            <h2>Tera</h2>
            <Fade right>
            <HexGrid info={tera.map(sponsor => {return {
                title: sponsor.isPlaceHolder? "Coming soon": sponsor.name,
                caption: sponsor.isPlaceHolder? "Coming soon": sponsor.name,
                image: sponsor.image,
                visible: true,
                href: sponsor.href
            }})} layoutInfo={{nHexaBig: 3, nHexaMed: 3, nHexaSmall: 3, baseSize:(width < 600)? "100vw": "70vw"}}/>
            </Fade>
            <h2>Giga</h2>
            <Fade left>
            <HexGrid info={giga.map(sponsor => {return {
                title: sponsor.isPlaceHolder? "Coming soon": sponsor.name,
                caption: sponsor.isPlaceHolder? "Coming soon": sponsor.name,
                image: sponsor.image,
                visible: true,
                href: sponsor.href
            }})} layoutInfo={{nHexaBig: 3, nHexaMed: 3, nHexaSmall: 3,  baseSize:(width < 600)? "100vw": "60vw"}}/>
            </Fade>
            <h2>Mega</h2>
            <Fade right>
            <HexGrid className="hex-five" info={mega.map(sponsor => {return {
                title: sponsor.isPlaceHolder? "Coming soon": sponsor.name,
                caption: sponsor.isPlaceHolder? "Coming soon": sponsor.name,
                image: sponsor.image,
                visible: true,
                href: sponsor.href
            }})} layoutInfo={{nHexaBig: 5, nHexaMed: 5, nHexaSmall: 5, baseSize:(width < 600)? "100vw": "50vw"}}/>
            </Fade>
            <h2>Kilo</h2>
            <Fade left>
            <HexGrid className={"hex-one-only"} info={kilo.map(sponsor => {return {
                title: sponsor.isPlaceHolder? "Coming soon": sponsor.name,
                caption: sponsor.isPlaceHolder? "Coming soon": sponsor.name,
                image: sponsor.image,
                visible: true,
                href: sponsor.href
            }})} layoutInfo={{nHexaBig: 1, nHexaMed: 1, nHexaSmall: 1, baseSize:(width < 600)? "40vw": "10vw"}}/>
            </Fade>
        </div>
    );
}