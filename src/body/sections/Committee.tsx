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
        caption: "The Boss",
        title: "Zoey",
        visible: true
    },
    {
        image: khalid,
        caption: "Finance",
        title: "Khalid",
        visible: true
    },
    {
        image: theo,
        caption: "Development",
        title: "Theo",
        visible: true
    },
    {
        image: "sth.jpg",
        caption: "Sponsorship",
        title: "Name",
        visible: true
    },
    {
        image: "sth.jpg",
        caption: "Design",
        title: "Name",
        visible: true
    },
    {
        image: "sth.jpg",
        caption: "Internal External Coordination",
        title: "Name",
        visible: true
    },
    {
        image: "sth.jpg",
        caption: "Publicity",
        title: "Name",
        visible: true
    },
    {
        image: "sth.jpg",
        caption: "Name8", 
        title: "Name",
        visible: true
    },
    {
        image: "sth.jpg",
        caption: "Name9",
        title: "Name",
        visible: true
    },
    {
        image: "sth.jpg",
        caption: "Name10",
        title: "Name",
        visible: true
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
