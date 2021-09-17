import React from 'react';

export type SectionProps = {
    name: string;
    className: string
};

/**
 * Example Section
 */
export default function Section({name, className}: SectionProps) {
    return (
        <div className={className}>
            This is the section of name {name}
        </div>
    );
}