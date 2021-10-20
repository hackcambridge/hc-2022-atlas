import React from 'react';
import './AboutUs.scss';
import cone from '../../shared/img/cone.png';
import donut from '../../shared/img/donut.png';
import sphere from '../../shared/img/sphere.png';
import lightbulb from '../../shared/img/001-idea.svg';
import uniofcam from '../../shared/img/uni_cam_white.png';
import { Parallax } from 'react-scroll-parallax';
import  { ScrollRotate } from 'react-scroll-rotate';
import Fade from 'react-reveal';

export type AboutUsProps = {};

export default function AboutUs({}: AboutUsProps) {
    return (
        <div className={"AboutUs"}>
            <div className="about-us-col about-us-col-1">
                <Fade left>
                    <h1>Join us</h1>
                    <h2>to make a difference</h2>
                </Fade>
                <Fade bottom>
                    <div className="about-us-with-dec">
                        <div className="about-us-with-dec-col-1">
                            <p>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hack Cambridge is an incredible opportunity for you - a keen, ambitious and talented university student to come together with your team and devise original and innovative solutions.
                                In this sprint like event of ideas and innovations, we hope to push towards a future vision of more creative use of codes and programs.
                                <br></br><br></br>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In January 2022, we will bring together 
                                500 outstanding hackers, programmers, designers, and more from universities all over the world. 
                                For 24 hours, virtually and in-person, we will build, break, and innovate to produce remarkable projects that push the boundaries 
                                of technology.
                            </p>
                            <ScrollRotate loops = {-0.5} method={"perc"} from = {10}>
                                <img src={cone} alt="" id="about-us-cone" className="about-us-dec"/>
                            </ScrollRotate>
                        </div>
                        <div className="about-us-with-dec-col-2">
                            <ScrollRotate loops = {1} method={"perc"} from = {-45}>
                                <img src={donut} alt="" id="about-us-donut" className="about-us-dec"/>
                            </ScrollRotate>
                            <ScrollRotate loops = {0.5} method={"perc"} from = {-45}>
                                <img src={sphere} alt="" id="about-us-sphere" className="about-us-dec"/>
                            </ScrollRotate>
                        </div>
                    </div>
                </Fade>
            </div>
            <Fade right>
                <div className="about-us-col about-us-col-2">
                    <ScrollRotate loops = {0.5} method={"perc"} from = {-45}>
                        <img src={lightbulb} alt="" />
                    </ScrollRotate>
                    <img src={uniofcam} alt="" />
                </div>
            </Fade>
        </div>
    );
}