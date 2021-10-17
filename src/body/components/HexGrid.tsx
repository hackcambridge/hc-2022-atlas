import React, { CSSProperties } from 'react';
import './HexGrid.scss';

export type HexGridProps = {
    className?: string,
    info: HexProps[],
    layoutInfo: {
        nHexaBig: number,
        nHexaMed: number,
        baseSize: string
    }
};

export type HexProps = {
    title: string, 
    caption: string, 
    image: string,
    visible: boolean,
}

const Hex = ({title, caption, image, visible}: HexProps) => {
    return (
        <article style={{visibility: visible?'visible':'hidden'}}>
            <figure>
                <h2>{title}</h2>
                <p>{caption}</p>
            </figure>
            <img alt={`${title}`} src={image}/>
        </article>
    )
}

export interface CustomCSSForHexGrid extends CSSProperties {
    '--Nhexa-big': number,
    '--Nhexa-med': number,
    '--base-size': string
};

export default function HexGrid({className, info, layoutInfo} : HexGridProps) {
    const getStyle = (nHexaBig: number, nHexaMed: number, baseSize: string) => {
        return {
            '--Nhexa-big': nHexaBig,
            '--Nhexa-med': nHexaMed,
            '--base-size': baseSize
        } as CustomCSSForHexGrid;
    }
    
    return (
    <div className={className? className + " HexGrid": "HexGrid"} style={getStyle(layoutInfo.nHexaBig, layoutInfo.nHexaMed, layoutInfo.baseSize)}>
        <section>
        {info.map((comInfo) => <Hex key={comInfo.caption} {...comInfo}/>)}
        </section>
    </div>
    )
}