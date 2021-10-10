import React from 'react';
import './PastPhotos.scss';
import AliceCarousel from 'react-alice-carousel';
import PastPhotoItem, { PastPhotoItemProps } from '../components/PastPhotoItem';

export type PastPhotosProps = {
    items: PastPhotoItemProps[]
};

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

export default function PastPhotos({items}: PastPhotosProps) {
    return (
        <div className="PastPhotos">
            <AliceCarousel mouseTracking items={items.map((item, i) => <PastPhotoItem key={i} {...item}/>)} responsive={responsive} controlsStrategy="alternate" />
        </div>
    );
}
