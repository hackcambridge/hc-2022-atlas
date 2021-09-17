import React from 'react';
import './FAQ.css';

export type FAQProps = {
    name: string;
    className: string
};

export default function FAQ({name, className}: FAQProps) {
    return (
        <div className={className}>
            This is the section of name {name}
        </div>
    );
}