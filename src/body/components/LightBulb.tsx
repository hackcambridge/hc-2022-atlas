import React from "react";
import './LightBulb.css';
import background from '../../img/worldmap_white.svg';

export default function LightBulb() {
    return (
        <div className="LightBulb">
            <div className="moving-map" style={{backgroundImage:`url(${background})`}}>
                {/* <div className="moving-map-content" style={{backgroundImage:`url(${background})`}}></div> */}
            </div>
            <div className="strip strip-1"></div>
            <div className="strip strip-2"></div>
            <div className="strip strip-3"></div>
        </div>
    );
};