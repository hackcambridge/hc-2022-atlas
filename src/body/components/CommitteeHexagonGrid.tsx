import React from 'react';
import './CommitteeHexagonGrid.scss';

export type CommitteeHexagonGridProps = {committeeMembers: {image: string, caption: string}[]};

/**
 * Committee hexagon grid
 * TODO: Refactor because this class defo is NOT good react practice. Rather, it's just code copy pasted from internet
 * @param committeeMembers - {image: string, caption: string}[]
 */
export default function CommitteeHexagonGrid({committeeMembers}: CommitteeHexagonGridProps) {
    return (
        <ul className="hex-grid__list">
            {/* <li className="hex-grid__item">
                <div className="hex-grid__content">
                    1
                </div>
            </li>
            <li className="hex-grid__item">
                <div className="hex-grid__content">
                    2
                </div>
            </li>
            <li className="hex-grid__item">
                <div className="hex-grid__content">
                    3
                </div>
            </li>
            <li className="hex-grid__item">
                <div className="hex-grid__content">
                    4
                </div>
            </li>
            <li className="hex-grid__item">
                <div className="hex-grid__content">
                    5
                </div>
            </li>
            <li className="hex-grid__item">
                <div className="hex-grid__content">
                    1
                </div>
            </li>
            <li className="hex-grid__item">
                <div className="hex-grid__content">
                    2
                </div>
            </li>
            <li className="hex-grid__item">
                <div className="hex-grid__content">
                    3
                </div>
            </li>
            <li className="hex-grid__item">
                <div className="hex-grid__content">
                    4
                </div>
            </li>
            <li className="hex-grid__item">
                <div className="hex-grid__content">
                    5
                </div>
            </li> */}
            {committeeMembers.map((member, n) => (
                <li className="hex-grid__item">
                    <div className="hex-grid__content">
                        {n}
                    </div>
                </li>
            ))}
        </ul>
    );
}
