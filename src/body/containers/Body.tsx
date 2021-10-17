import React from "react";
import AboutUs from "../sections/AboutUs";
import Committee from "../sections/Committee";
import FAQ from "../sections/FAQ";
import Landing from "../sections/Landing";
import PastHackathons from "../sections/PastHackathons";
import PastPhotos from "../sections/PastPhotos";
import Sponsors, { Sponsor } from "../sections/Sponsors";
import SponsorShowcase from "../sections/SponsorShowcase";
import './Body.scss';

import photo1 from "../../shared/img/past-photos/1.jpg";
import photo2 from "../../shared/img/past-photos/2.jpg";
import photo3 from "../../shared/img/past-photos/3.jpg";
import photo4 from "../../shared/img/past-photos/4.jpg";

import zoey from '../../shared/img/committee/Zoey.jpg';
import theo from '../../shared/img/committee/Theo.jpg';
import khalid from '../../shared/img/committee/Khalid.jpg';
import marcus from '../../shared/img/committee/Marcus.jpg';
import jonathan from '../../shared/img/committee/Jonathan.jpg';

import placeHolderLogo from '../../shared/img/White Logo.png';
import mw from '../../shared/img/sponsors/marshall_wace_transparent.png';
import reply from '../../shared/img/sponsors/reply_logo.svg';
import huawei from '../../shared/img/sponsors/huawei.png';
import citadel from '../../shared/img/sponsors/citadel.png';

export type BodyProp = {

};

// This is temporary.
// TODO: need to put this in some config file and then we can import this afterwards

const cohost : Sponsor = 
    {
        name: "Marshall Wace",
        tier: 'Cohost',
        href: 'https://www.mwam.com/',
        image: mw,
        isPlaceHolder: false
    };

const tera : Sponsor[] = [
    {
        name: "Reply",
        tier: 'Tera',
        href: 'https://www.reply.com',
        image: reply,
        isPlaceHolder: false
    },
    {
        name: "Huawei",
        tier: 'Tera',
        href: 'https://www.huawei.com/',
        image: huawei,
        isPlaceHolder: false
    },
    {
        name: "Something",
        tier: 'Tera',
        href: '',
        image: placeHolderLogo,
        isPlaceHolder: false
    }
];

const giga: Sponsor[] = [
    {
        name: "Something2",
        tier: 'Giga',
        href: '',
        image: placeHolderLogo,
        isPlaceHolder: false
    },
    {
        name: "Something3",
        tier: 'Giga',
        href: '',
        image: placeHolderLogo,
        isPlaceHolder: false
    },
    {
        name: "Something4",
        tier: 'Tera',
        href: '',
        image: placeHolderLogo,
        isPlaceHolder: false
    }
];

const mega: Sponsor[] = [
    {
        name: "Something5",
        tier: 'Mega',
        href: '',
        image: placeHolderLogo,
        isPlaceHolder: false
    },
    {
        name: "Something6",
        tier: 'Mega',
        href: '',
        image: placeHolderLogo,
        isPlaceHolder: false
    },
    {
        name: "Something7",
        tier: 'Mega',
        href: '',
        image: placeHolderLogo,
        isPlaceHolder: false
    }
];

const kilo: Sponsor[] = [
    {
        name: "Something8",
        tier: 'Kilo',
        href: '',
        image: placeHolderLogo,
        isPlaceHolder: false
    },
    {
        name: "Something9",
        tier: 'Kilo',
        href: '',
        image: placeHolderLogo,
        isPlaceHolder: false
    },
    {
        name: "Something10",
        tier: 'Kilo',
        href: '',
        image: placeHolderLogo,
        isPlaceHolder: false
    },
    {
        name: "Something11",
        tier: 'Kilo',
        href: '',
        image: placeHolderLogo,
        isPlaceHolder: false
    },
    {
        name: "Something12",
        tier: 'Kilo',
        href: '',
        image: placeHolderLogo,
        isPlaceHolder: false
    }
];

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
        image: marcus,
        caption: "Sponsorship",
        title: "Marcus",
        visible: true
    },
    {
        image: "sth.jpg",
        caption: "Design",
        title: "Holly",
        visible: true
    },
    {
        image: "sth.jpg",
        caption: "Internal External Coordination",
        title: "Ayush",
        visible: true
    },
    {
        image: "sth.jpg",
        caption: "Publicity",
        title: "Rishita",
        visible: true
    },
    {
        image: jonathan,
        caption: "Logistics", 
        title: "Jonathan",
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

export default function Body(props: BodyProp) {
    return (
        <div className="Body">
            <Landing />
            <AboutUs />
            <PastPhotos items={pastPhotos}/>
            <FAQ qs={faqQuestions} />
            {/* <SponsorShowcase /> */}
            <Sponsors cohost={cohost} tera={tera} giga={giga} mega={mega} kilo={kilo}/>
            {/* <PastHackathons /> */}
            <Committee committeeInfo={committeInfo} linkToJoin={linkToJoin}/>
        </div>
    );
}