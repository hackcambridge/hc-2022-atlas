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

import timeline from '../../shared/img/Timeline.png';

import hc2016 from "../../shared/img/past-photos/hc-2016-1.jpg";
import hc2017 from "../../shared/img/past-photos/hc-2017-1.jpg";
import hc2018_1 from "../../shared/img/past-photos/hc-2018-1.jpg";
import hc2018_2 from "../../shared/img/past-photos/hc-2018-2.jpg";
import hc2019_1 from "../../shared/img/past-photos/hc-2019-1.jpg";
import hc2019_2 from "../../shared/img/past-photos/hc-2019-2.jpg";
import hc2019_3 from "../../shared/img/past-photos/hc-2019-3.jpg";
import hc2020_1 from "../../shared/img/past-photos/hc-2020-1.jpg";
import hc2020_2 from "../../shared/img/past-photos/hc-2020-2.jpg";
import hc2021 from '../../shared/img/past-photos/hc-2021-1.png';

import zoey from '../../shared/img/committee/Zoey.jpg';
import theo from '../../shared/img/committee/Theo.jpg';
import khalid from '../../shared/img/committee/Khalid.jpg';
import marcus from '../../shared/img/committee/Marcus.jpg';
import jonathan from '../../shared/img/committee/Jonathan.jpg';
import ayush from '../../shared/img/committee/Ayush.jpg';
import vincent from '../../shared/img/committee/Vincent.jpeg';
import jacky from '../../shared/img/committee/Jacky.jpeg';
import holly from '../../shared/img/committee/Holly.jpg';
import katrina from '../../shared/img/committee/Katrina.jpg';
import rishita from '../../shared/img/committee/Rishita.jpg';
import xinyu from '../../shared/img/committee/Xinyu.jpg';

import placeHolderLogo from '../../shared/img/Logo_White.png';
import mw from '../../shared/img/sponsors/marshall_wace_blue.png';
import reply from '../../shared/img/sponsors/reply_logo.svg';
import huawei from '../../shared/img/sponsors/huawei.png';
import citadel from '../../shared/img/sponsors/citadel.png';
import graphcore from '../../shared/img/sponsors/graphcore.png';
import gresearch from '../../shared/img/sponsors/g-research.png';
import janestreet from '../../shared/img/sponsors/janestreet.png';
import wolfram from '../../shared/img/sponsors/wolfram.png';
import Timeline from "../sections/Timeline";

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
    // {
    //     name: "Huawei",
    //     tier: 'Tera',
    //     href: 'https://www.huawei.com/',
    //     image: huawei,
    //     isPlaceHolder: false
    // },
    {
        name: "Something",
        tier: 'Tera',
        href: '',
        image: placeHolderLogo,
        isPlaceHolder: true
    },
    {
        name: "Reply",
        tier: 'Tera',
        href: 'https://www.reply.com',
        image: reply,
        isPlaceHolder: false
    },
    {
        name: "Something else",
        tier: 'Tera',
        href: '',
        image: placeHolderLogo,
        isPlaceHolder: true
    }
];

const giga: Sponsor[] = [
    {
        name: "Something2",
        tier: 'Giga',
        href: '',
        image: placeHolderLogo,
        isPlaceHolder: true
    },
    {
        name: "Graphcore",
        tier: 'Giga',
        href: 'https://www.graphcore.ai/',
        image: graphcore,
        isPlaceHolder: false
    },
    {
        name: "Something4",
        tier: 'Giga',
        href: '',
        image: placeHolderLogo,
        isPlaceHolder: true
    }
];

const mega: Sponsor[] = [
    {
        name: "Something7",
        tier: 'Mega',
        href: '',
        image: placeHolderLogo,
        isPlaceHolder: true
    },
    {
        name: "G-Research",
        tier: 'Mega',
        href: 'https://www.gresearch.co.uk/',
        image: gresearch,
        isPlaceHolder: false
    },
    {
        name: "Something7",
        tier: 'Mega',
        href: '',
        image: placeHolderLogo,
        isPlaceHolder: true
    },
    {
        name: "Jane Street",
        tier: 'Mega',
        href: 'https://www.janestreet.com/',
        image: janestreet,
        isPlaceHolder: false
    },
    {
        name: "Something7",
        tier: 'Mega',
        href: '',
        image: placeHolderLogo,
        isPlaceHolder: true
    },
];

const kilo: Sponsor[] = [
    {
        name: "Wolfram",
        tier: 'Kilo',
        href: 'https://www.wolfram.com/',
        image: wolfram,
        isPlaceHolder: false
    },
];

const faqQuestions = [
    {
        question: "What is a hackathon?",
        answer: "A hackathon is an invention marathon. Thoughts become things. Attendees work in teams of up to 5 people to hack together a prototype to solve a problem; this could be a web app, hardware-hack, or something completely different.",
        folded: false
    },
    {
        question: "How does the hybrid Hackathon work？Can my team be considered for prizes or chat with your sponsors?",
        answer: "We will invite ~300 participants to join us in-person at Cambridge for the Event and 200 to join us through Discord. All workshops and engagement sessions will happen in-person while being live-streamed on Discord. Our sponsors will join Discord to interact with you if you participate online. Judging for online participants will take place through Discord too. When we invite you to the event, the email will specify whether we would be able to offer you a place offline. We would really hope to accommodate everyone offline, but your safety and health is our top one priority.",
        folded: true
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
    },
];

const pastPhotos = [
    {
        photo: hc2021,
        caption: "Hex Cambridge"
    },
    {
        photo: hc2020_1,
        caption: "Hack Cambridge 101"
    },
    {
        photo: hc2020_2,
        caption: "Hack Cambridge 101"
    },
    {
        photo: hc2019_1,
        caption: "Hack Cambridge 4D"
    },
    {
        photo: hc2019_2,
        caption: "Hack Cambridge 4D"
    },
    {
        photo: hc2019_3,
        caption: "Hack Cambridge 4D"
    },
    {
        photo: hc2018_1,
        caption: "Hack Cambridge Ternary"
    },
    {
        photo: hc2018_2,
        caption: "Hack Cambridge Ternary"
    },
    {
        photo: hc2017,
        caption: "Hack Cambridge Recurse"
    },
    {
        photo: hc2016,
        caption: "Hack Cambridge 2016 -- Where we started"
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
        image: holly,
        caption: "Head of Design",
        title: "Holly",
        visible: true
    },
    {
        image: ayush,
        caption: "Head of Int/Ext Coordination",
        title: "Ayush",
        visible: true
    },
    {
        image: rishita,
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
        image: jacky,
        caption: "Development",
        title: "Jacky",
        visible: true
    },
    {
        image: katrina,
        caption: "Committee",
        title: "Katrina",
        visible: true
    },
    {
        image: xinyu,
        caption: "Sponsorship",
        title: "Xinyu",
        visible: true
    }
];

const linkToJoin = 'https://forms.gle/2rNYCxYPBcUXQ7EC8';

export default function Body(props: BodyProp) {
    return (
        <div className="Body">
            <Landing />
            <Timeline timelinePhoto={timeline}/>
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