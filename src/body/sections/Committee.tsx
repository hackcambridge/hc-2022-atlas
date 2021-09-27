import React from 'react';
import CommitteeHexagonGrid from '../components/CommitteeHexagonGrid';

import './Committee.css';

const committeInfo = [
    {
        image: "sth.jpg",
        caption: "Name"
    },
    {
        image: "sth.jpg",
        caption: "Name"
    },
    {
        image: "sth.jpg",
        caption: "Name"
    },
    {
        image: "sth.jpg",
        caption: "Name"
    },
    {
        image: "sth.jpg",
        caption: "Name"
    },
    {
        image: "sth.jpg",
        caption: "Name"
    },
    {
        image: "sth.jpg",
        caption: "Name"
    },
    {
        image: "sth.jpg",
        caption: "Name"
    },
    {
        image: "sth.jpg",
        caption: "Name"
    },
    {
        image: "sth.jpg",
        caption: "Name"
    }
];

export type CommitteeProps = {};

export default function Committee({}: CommitteeProps) {
    return (
        <div className={"Committee"}>
            <CommitteeHexagonGrid committeeMembers={committeInfo}/>
        </div>
    );
}