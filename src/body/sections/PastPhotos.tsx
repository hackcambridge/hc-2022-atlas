import React from 'react';
import './PastPhotos.css';

export type PastPhotosProps = {
    name: string;
    className: string
};

/**
 * Example Section
 */
export default function PastPhotos({name, className}: PastPhotosProps) {
    return (
        <div className={className}>
            This is the section of name {name}
        </div>
    );
}