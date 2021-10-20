import React from 'react';
import CommitteeHexagonGrid from '../components/CommitteeHexagonGrid';
import HexGrid, { HexProps } from '../components/HexGrid';
import Fade from 'react-reveal';

import './Committee.scss';

export type CommitteeProps = {
    committeeInfo: HexProps[],
    linkToJoin: string
};

export default function Committee({committeeInfo, linkToJoin}: CommitteeProps) {
    return (
        <div className={"Committee"}>
            <h1>Meet our Team!</h1>
            <Fade bottom>
            <HexGrid className={"hex-committee"} info={committeeInfo} layoutInfo={{nHexaBig: 10, nHexaMed: 4, baseSize:"100vw"}}/>
            </Fade>
            <div className={"join-us"}>
                <a href={linkToJoin}>Interested in joining the team?</a>
            </div>
        </div>
    );
}
