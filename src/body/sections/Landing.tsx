import React from 'react';
import './Landing.scss';
import Timer from '../components/Timer';
// import background from '../../shared/img/world_map_coloured.svg';
import background from '../../shared/img/Colour-updated.png';
import { Parallax } from 'react-scroll-parallax';
import Fade from 'react-reveal';

// Format is MM/DD/YYYY
export const targetDate = new Date('12/21/2021');

export type LandingProps = {
    name?: string;
    href: string;
};

/**
 * Landing Section
 */
export default function Landing({name, href}: LandingProps) {
    // TODO: Move state up to Landing and define all the constants here
    return (
        <div className="Landing">
            <Fade right>
            <Parallax className="landing-bg-parallax" x={[60, -30]} y={[0, 0]}>
                <div className="landing-bg" style={{backgroundImage: `url(${background})`}}></div>
            </Parallax>
            </Fade>
            <div className={"landing-main"}>
                <Fade left>
                    <div className="landing-col1">
                        <h1 className="landing-hc-title landing-hc-title-small">Hack Cambridge</h1>
                        <h1 className="landing-hc-title landing-hc-title-big">Atlas</h1>
                        <h1 className="landing-date">22-23 Jan 2022</h1>
                        {/* <MailingListForm /> */}
                        {/* <SponsorButton /> */}
                        <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cambridge's biggest student-run hackathon is back for its seventh iteration! We're back this year both virtually and in-person. We're very excited
                            to present to you a brand new experience at Hack Cambridge Atlas 2022.
                        </p>
                    </div>
                </Fade>
                    <div className="landing-col2">
                        {/* <LightBulb /> */}
                        <Timer targetDate={targetDate} until={"Applications Close"}/>
                        <a href={href} className="apply-button">Apply today!</a>
                    </div>
            </div>
            

        </div>
    );
}