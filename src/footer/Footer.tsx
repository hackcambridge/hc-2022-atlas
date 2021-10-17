import React from "react";

import './Footer.scss';

import fb from '../shared/img/facebook.png';
import linkedin from '../shared/img/linkedin.png';
import instagram from '../shared/img/instagram.png';


export type FooterProps = {};

export default function Footer(props: FooterProps) {
    return <div className="Footer">
        <div className="JoinUs"></div>
        <div className="SocialMedia">
            <a href="">
                <img src={fb} alt="Facebook"/>
            </a>
            <a href="">
                <img src={linkedin} alt="Linkedin"/>
            </a>
            <a href="">
                <img src={instagram} alt="Instagram"/>
            </a>
        </div>
    </div>;
}

