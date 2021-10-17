import React from "react";
import AboutUs from "../sections/AboutUs";
import Committee from "../sections/Committee";
import FAQ from "../sections/FAQ";
import Landing from "../sections/Landing";
import PastHackathons from "../sections/PastHackathons";
import PastPhotos from "../sections/PastPhotos";
import Sponsors, { Sponsor } from "../sections/Sponsors";
import SponsorShowcase from "../sections/SponsorShowcase";
import './Body.css';

import photo1 from "../../shared/img/past-photos/1.jpg";
import photo2 from "../../shared/img/past-photos/2.jpg";
import photo3 from "../../shared/img/past-photos/3.jpg";
import photo4 from "../../shared/img/past-photos/4.jpg";

import zoey from '../../shared/img/committee/Zoey.jpg';
import theo from '../../shared/img/committee/Theo.jpg';
import khalid from '../../shared/img/committee/Khalid.jpg';

import placeHolderLogo from '../../shared/img/White Logo.png';

export type BodyProp = {

};

// This is temporary.
// TODO: need to put this in some config file and then we can import this afterwards

const cohost : Sponsor = 
    {
        name: "Marshall Wace",
        tier: 'Cohost',
        href: '',
        image: placeHolderLogo,
        isPlaceHolder: false
    };

const tera : Sponsor[] = [
    {
        name: "Reply",
        tier: 'Tera',
        href: '',
        image: placeHolderLogo,
        isPlaceHolder: false
    },
    {
        name: "Something else",
        tier: 'Tera',
        href: '',
        image: placeHolderLogo,
        isPlaceHolder: false
    },
    {
        name: "Something something else",
        tier: 'Tera',
        href: '',
        image: placeHolderLogo,
        isPlaceHolder: false
    }
];

const giga: Sponsor[] = [];

const mega: Sponsor[] = [];

const kilo: Sponsor[] = [];

const faqQuestions = [
    {
        question: "q1 something something?",
        answer: "answer answer answer",
        folded: false
    },
    {
        question: "q2 something something?",
        answer: "answer answer answer",
        folded: true
    },
    {
        question: "q3 something something?",
        answer: "answer answer answer",
        folded: true
    }
];

const pastPhotos = [
    {
        photo: photo1,
        caption: "This is a caption"
    },
    {
        photo: photo2,
        caption: "This is a caption"
    },
    {
        photo: photo3,
        caption: "This is a caption"
    },
    {
        photo: photo4,
        caption: "This is a caption"
    }
];

const committeInfo = [
    {
        image: zoey,
        caption: "The Boss",
        title: "Zoey",
        visible: true
    },
    {
        image: khalid,
        caption: "Finance",
        title: "Khalid",
        visible: true
    },
    {
        image: theo,
        caption: "Development",
        title: "Theo",
        visible: true
    },
    {
        image: "sth.jpg",
        caption: "Sponsorship",
        title: "Name",
        visible: true
    },
    {
        image: "sth.jpg",
        caption: "Design",
        title: "Name",
        visible: true
    },
    {
        image: "sth.jpg",
        caption: "Internal External Coordination",
        title: "Name",
        visible: true
    },
    {
        image: "sth.jpg",
        caption: "Publicity",
        title: "Name",
        visible: true
    },
    {
        image: "sth.jpg",
        caption: "Name8", 
        title: "Logistics",
        visible: true
    },
    {
        image: "sth.jpg",
        caption: "Name9",
        title: "Name",
        visible: true
    },
    {
        image: "sth.jpg",
        caption: "Name10",
        title: "Name",
        visible: true
    }
];

const linkToJoin = '';

export default function Body({}: BodyProp) {
    return (
        <div className="Body">
            <Landing />
            <AboutUs />
            <PastPhotos items={pastPhotos}/>
            <FAQ qs={faqQuestions} />
            <SponsorShowcase />
            <Sponsors cohost={cohost} tera={tera} giga={giga} mega={mega} kilo={kilo}/>
            <PastHackathons />
            <Committee committeeInfo={committeInfo} linkToJoin={linkToJoin}/>
        </div>
    );
}