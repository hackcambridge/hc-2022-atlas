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
import ayush from '../../shared/img/committee/Ayush.jpg';
import vincent from '../../shared/img/committee/Vincent.jpeg';

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
        question: "What is a hackathon?",
        answer: "A hackathon is an invention marathon. Thoughts become things. Attendees work in teams of up to 5 people to hack together a prototype to solve a problem; this could be a web app, hardware-hack, or something completely different.",
        folded: false
    },
    {
        question: "How is the hackathon going to take place?",
        answer: "This year Hack Cambridge Atlas is planned as a Hybrid Event with 300 participants offline at Cambridge and 200 participants online through Discord. The workshops and all engagement opportunities will happen offline while being live-streamed on Discord.",
        folded: true
    },
    {
        question: "Do I need a team to apply?",
        answer: "Nope! You are of course welcome to apply in a pre-formed team but some of our hackers will meet their team at the start of the event.",
        folded: true
    },
    {
        question: "How large can the teams be?",
        answer: "To achieve fairness in the event, no more than 4 people can be in a team.",
        folded: true
    },
    {
        question: "I am not from the University of Cambridge. Am I allowed to attend?",
        answer: "Anyone who is currently a registered student or has graduated after 22nd January 2021 is eligible to attend. Sadly we can't accommodate anyone under the age of 18 this year.",
        folded: true
    },
    {
        question: "Is Hack Cambridge Atlas free to attend?",
        answer: "Absolutely! Participation is free for all invited hackers. We provide interesting workshops, entertaining activties, and some swag during the event.",
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
        caption: "Head of Finance",
        title: "Khalid",
        visible: true
    },
    {
        image: theo,
        caption: "Head of Development",
        title: "Theo",
        visible: true
    },
    {
        image: marcus,
        caption: "Head of Sponsorship",
        title: "Marcus",
        visible: true
    },
    {
        image: "sth.jpg",
        caption: "Head of Design",
        title: "Holly",
        visible: true
    },
    {
        image: ayush,
        caption: "Head of Internal External Coordination",
        title: "Ayush",
        visible: true
    },
    {
        image: "sth.jpg",
        caption: "Head of Publicity",
        title: "Rishita",
        visible: true
    },
    {
        image: jonathan,
        caption: "Head of Logistics", 
        title: "Jonathan",
        visible: true
    },
    {
        image: vincent,
        caption: "Sponsorship",
        title: "Vincent",
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