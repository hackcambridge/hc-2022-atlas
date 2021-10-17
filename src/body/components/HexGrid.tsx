import React, { CSSProperties } from 'react';
import './HexGrid.scss';

export type HexGridProps = {
    info: {
        image: string,
        title: string,
        caption: string,
    }[],
    layoutInfo: {
        nHexaBig: number,
        nHexaMed: number
    }
};

type HexProps = {
    title: string, 
    caption: string, 
    image: string,
    visible: boolean
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
    '--Nhexa-med': number
};

export default function HexGrid({info, layoutInfo} : HexGridProps) {
    const getStyle = (nHexaBig: number, nHexaMed: number) => {
        return {
            '--Nhexa-big': nHexaBig,
            '--Nhexa-med': nHexaMed
        } as CustomCSSForHexGrid;
    }
    
    return (
    <div className="HexGrid" style={getStyle(layoutInfo.nHexaBig, layoutInfo.nHexaMed)}>
        <section>
        {info.map((comInfo) => <Hex key={comInfo.caption} {...comInfo} visible/>)}
        </section>
    </div>
    )
}