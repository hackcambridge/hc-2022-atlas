import React from 'react';
import './AboutUs.scss';

export type AboutUsProps = {};

export default function AboutUs({}: AboutUsProps) {
    return (
        <div className={"AboutUs"}>
            <div className="about-us-col about-us-col-1">
                <h1>Join us to make a difference</h1>
                <p>
                    In January 2022, the University of Cambridge's annual hackathon will yet again bring together 
                    500 outstanding hackers, programmers, designers, and more from universities all over the world. 
                    For 36 hours, virtually and in-person, they will build, break, and innovate to produce remarkable projects that push the boundaries 
                    of technology.
                </p>
            </div>
            <div className="about-us-col about-us-col-2"></div>
        </div>
    );
}