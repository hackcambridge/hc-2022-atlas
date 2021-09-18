import React from 'react';
import './Landing.css';
import worldMap from '../../img/worldmap_black.svg';

export type LandingProps = {
    name?: string;
    className?: string
};

/**
 * Landing Section
 */
export default function Landing({name, className}: LandingProps) {
    return (
        <div className={className || "Landing"}>
            <div className="landing-col1">
                <h1>Hack Cambridge Atlas</h1>
                <p>16-17 Jan 2022</p>
                <div>THIS IS A TIMER</div>
                <div>THIS IS A MAILING LIST BUTTON</div>
                <div>THIS IS A SPONSOR BUTTON</div>
            </div>
            <div className="landing-col2">
                <div>THIS IS A BIG IMAGE</div>
            </div>
        </div>
    );
}