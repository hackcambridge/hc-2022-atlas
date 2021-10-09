import React from 'react';
import CommitteeHexagonGrid from '../components/CommitteeHexagonGrid';

import './Committee.scss';

const committeInfo = [
    {
        image: "sth.jpg",
        caption: "Name1"
    },
    {
        image: "sth.jpg",
        caption: "Name2"
    },
    {
        image: "sth.jpg",
        caption: "Name3"
    },
    {
        image: "sth.jpg",
        caption: "Name4"
    },
    {
        image: "sth.jpg",
        caption: "Name5"
    },
    {
        image: "sth.jpg",
        caption: "Name6"
    },
    {
        image: "sth.jpg",
        caption: "Name7"
    },
    {
        image: "sth.jpg",
        caption: "Name8"
    },
    {
        image: "sth.jpg",
        caption: "Name9"
    },
    {
        image: "sth.jpg",
        caption: "Name10"
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