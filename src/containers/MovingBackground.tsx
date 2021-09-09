import React from 'react';
import './MovingBackground.css';

export type MovingBackgroundProps = {
    children: React.ReactNode;
    background: string
};

export default function MovingBackground({children, background}: MovingBackgroundProps) {
    return (
        <div className="MovingBackground" style={{backgroundImage: `url(${background})`}}>
            {children}
        </div>
    );
}