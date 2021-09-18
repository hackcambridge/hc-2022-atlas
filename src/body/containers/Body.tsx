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

export default function Body({}: BodyProp) {
    return (
        <div className="Body">
            <Landing />
            <AboutUs />
            <PastPhotos />
            <FAQ />
            <SponsorShowcase />
            <Sponsors />
            <PastHackathons />
            <Committee />
        </div>
    );
}