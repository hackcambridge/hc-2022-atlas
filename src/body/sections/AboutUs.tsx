import React from 'react';
import './AboutUs.scss';
import cone from '../../shared/img/cone.png';
import donut from '../../shared/img/donut.png';
import sphere from '../../shared/img/sphere.png';
import lightbulb from '../../shared/img/001-idea.svg';
import uniofcam from '../../shared/img/cambridge.png';
import { Parallax } from 'react-scroll-parallax';

export type AboutUsProps = {};

export default function AboutUs({}: AboutUsProps) {
    return (
        <div className={"AboutUs"}>
            <div className="about-us-col about-us-col-1">
                <h1>Join us to make a difference</h1>
                <div className="about-us-with-dec">
                    <div className="about-us-with-dec-col-1">
                        <p>
                            In January 2022, the University of Cambridge's annual hackathon will yet again bring together 
                            500 outstanding hackers, programmers, designers, and more from universities all over the world. 
                            For 36 hours, virtually and in-person, they will build, break, and innovate to produce remarkable projects that push the boundaries 
                            of technology.
                        </p>
                        <Parallax x={[-1, 1]} y={[-10, 10]}>
                            <img src={cone} alt="" id="about-us-cone" className="about-us-dec"/>
                        </Parallax>
                    </div>
                    <div className="about-us-with-dec-col-2">
                    <Parallax x={[1, -1]} y={[-30, 10]}>
                        <img src={donut} alt="" id="about-us-donut" className="about-us-dec"/>
                    </Parallax>
                    <Parallax x={[1, -1]} y={[-50, 50]}>
                        <img src={sphere} alt="" id="about-us-sphere" className="about-us-dec"/>
                    </Parallax>
                    </div>
                </div>
            </div>
            <div className="about-us-col about-us-col-2">
                <Parallax x={[0, 0]} y={[10, -10]}>
                    <img src={lightbulb} alt="" />
                </Parallax>
                <img src={uniofcam} alt="" />
            </div>
        </div>
    );
}