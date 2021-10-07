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

export type BodyProp = {

};

// This is temporary.
// TODO: need to put this in some config file and then we can import this afterwards
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

export default function Body({}: BodyProp) {
    return (
        <div className="Body">
            <Landing />
            <AboutUs />
            <PastPhotos />
            <FAQ qs={faqQuestions} />
            <SponsorShowcase />
            <Sponsors />
            <PastHackathons />
            <Committee />
        </div>
    );
}