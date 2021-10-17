import React from 'react';
import CommitteeHexagonGrid from '../components/CommitteeHexagonGrid';
import HexGrid from '../components/HexGrid';

import './Committee.scss';

import zoey from '../../shared/img/committee/Zoey.jpg';
import theo from '../../shared/img/committee/Theo.jpg';
import khalid from '../../shared/img/committee/Khalid.jpg';

const committeInfo = [
    {
        image: zoey,
        caption: "Zoey",
        title: "Zoey"
    },
    {
        image: khalid,
        caption: "Khalid",
        title: "Khalid",
    },
    {
        image: theo,
        caption: "Theo",
        title: "Theo"
    },
    {
        image: "sth.jpg",
        caption: "Name4",
        title: "Name"
    },
    {
        image: "sth.jpg",
        caption: "Name5",
        title: "Name"
    },
    {
        image: "sth.jpg",
        caption: "Name6",
        title: "Name"
    },
    {
        image: "sth.jpg",
        caption: "Name7",
        title: "Name"
    },
    {
        image: "sth.jpg",
        caption: "Name8", 
        title: "Name"
    },
    {
        image: "sth.jpg",
        caption: "Name9",
        title: "Name"
    },
    {
        image: "sth.jpg",
        caption: "Name10",
        title: "Name"
    }
];

export type CommitteeProps = {};

export default function Committee({}: CommitteeProps) {
    return (
        <div className={"Committee"}>
            <h1>Meet the committee!</h1>
            <HexGrid info={committeInfo} layoutInfo={{nHexaBig: 10, nHexaMed: 4}}/>
        </div>
    );
}
