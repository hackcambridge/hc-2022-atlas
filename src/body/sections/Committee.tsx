import React from 'react';
import CommitteeHexagonGrid from '../components/CommitteeHexagonGrid';
import HexGrid, { HexProps } from '../components/HexGrid';

import './Committee.scss';

export type CommitteeProps = {
    committeeInfo: HexProps[],
    linkToJoin: string
};

export default function Committee({committeeInfo, linkToJoin}: CommitteeProps) {
    return (
        <div className={"Committee"}>
            <h1>Meet the committee!</h1>
            <HexGrid className={"hex-committee"} info={committeeInfo} layoutInfo={{nHexaBig: 10, nHexaMed: 4, baseSize:"100vw"}}/>
            <div className={"join-us"}>
                <a href={linkToJoin}>Join us</a>
            </div>
        </div>
    );
}
