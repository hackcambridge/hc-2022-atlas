import React from 'react';
import './Landing.scss';
import Timer from '../components/Timer';
import background from '../../shared/img/world_map_coloured.svg';
import { Parallax, useController } from 'react-scroll-parallax';

// Format is MM/DD/YYYY
export const targetDate = new Date('10/22/2021');

export type LandingProps = {
    name?: string;
};

/**
 * Landing Section
 */
export default function Landing({name}: LandingProps) {
    // TODO: Need to make the moving earth thing
    // TODO: Move state up to Landing and define all the constants here
    return (
        <div className="Landing">
            <Parallax className="landing-bg-parallax" x={[50, -30]} y={[0, 0]}>
                <div className="landing-bg" style={{backgroundImage: `url(${background})`}}></div>
            </Parallax>
            <div className={"landing-main"}>
                <div className="landing-col1">
                    <h1 className="landing-hc-title landing-hc-title-small">Hack Cambridge</h1>
                    <h1 className="landing-hc-title landing-hc-title-big">Atlas</h1>
                    <h1 className="landing-date">16-17 Jan 2022</h1>
                    {/* <MailingListForm /> */}
                    {/* <SponsorButton /> */}
                    <p>
                        Cambridge's biggest 36h hackathon is back for its seventh iteration! We're back this year both virtually and in-person. We're very excited
                        to present to you with a brand new experience to all of you at Hack Cambridge Atlas 2022.
                    </p>
                </div>
                <div className="landing-col2">
                    {/* <LightBulb /> */}
                    <Timer targetDate={targetDate} until={"soft launch"}/>
                </div>
            </div>
            

        </div>
    );
}