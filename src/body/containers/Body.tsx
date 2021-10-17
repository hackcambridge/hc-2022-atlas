import React from "react";
import AboutUs from "../sections/AboutUs";
import Committee from "../sections/Committee";
import FAQ from "../sections/FAQ";
import Landing from "../sections/Landing";
import PastHackathons from "../sections/PastHackathons";
import PastPhotos from "../sections/PastPhotos";
import Sponsors from "../sections/Sponsors";
import SponsorShowcase from "../sections/SponsorShowcase";
import './Body.css';

import photo1 from "../../shared/img/past-photos/1.jpg";
import photo2 from "../../shared/img/past-photos/2.jpg";
import photo3 from "../../shared/img/past-photos/3.jpg";
import photo4 from "../../shared/img/past-photos/4.jpg";


export type BodyProp = {

};

// This is temporary.
// TODO: need to put this in some config file and then we can import this afterwards
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

export default function Body({}: BodyProp) {
    return (
        <div className="Body">
            <Landing />
            <AboutUs />
            <PastPhotos items={pastPhotos}/>
            <FAQ qs={faqQuestions} />
            <SponsorShowcase />
            <Sponsors />
            <PastHackathons />
            <Committee />
        </div>
    );
}