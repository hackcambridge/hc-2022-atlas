import React from "react";

import './Footer.scss';

import fb from '../shared/img/facebook.png';
import linkedin from '../shared/img/linkedin.png';
import instagram from '../shared/img/instagram.png';
import MailingListForm from "./MailingListForm";


export type FooterProps = {};

export default function Footer(props: FooterProps) {
    return <div className="Footer">
        <div className="JoinUs">
            <h1>Join our mailing list!</h1>
            <MailingListForm />
        </div>
        <div className="SocialMedia">
            <a href="https://www.facebook.com/hackcambridge">
                <img src={fb} alt="Facebook"/>
            </a>
            <a href="https://www.linkedin.com/company/hack-cambridge">
                <img src={linkedin} alt="Linkedin"/>
            </a>
            <a href="https://www.instagram.com/hack_cambridge/">
                <img src={instagram} alt="Instagram"/>
            </a>
        </div>
    </div>;
}

