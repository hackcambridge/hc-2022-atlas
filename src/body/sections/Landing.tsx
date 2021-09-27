import React from 'react';
import './Landing.css';
import Timer from '../components/Timer';
import MailingListForm from '../components/MailingListForm';
import SponsorButton from '../components/SponsorButton';
import LightBulb from '../components/LightBulb';

// Format is MM/DD/YYYY
export const targetDate = new Date('10/22/2021');

export type LandingProps = {
    name?: string;
    className?: string
};

/**
 * Landing Section
 */
export default function Landing({name, className}: LandingProps) {
    // TODO: Need to make the moving earth thing
    // TODO: Move state up to Landing and define all the constants here
    return (
        <div className={className || "Landing"}>
            <div className="landing-col1">
                <h1 className="landing-hc-title">Hack Cambridge Atlas</h1>
                <h2>16-17 Jan 2022</h2>
                <Timer targetDate={targetDate}/>
                <h3>Until soft launch</h3>
                <MailingListForm />
                <SponsorButton />
            </div>
            <div className="landing-col2">
                <LightBulb />
            </div>
        </div>
    );
}