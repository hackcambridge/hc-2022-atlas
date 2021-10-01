import React, { MouseEventHandler } from 'react';
import './FAQTextBox.scss';

export type FAQTextBoxProps = {
    question: string;
    answer: string;
    folded: boolean;
    onButtonClick: MouseEventHandler<HTMLButtonElement>;
};

export default function FAQTextBox({question, answer, folded, onButtonClick}: FAQTextBoxProps) {
    return (
        <div className='FAQTextBox'>
            <div>
                <h2>{question}</h2>
                <button onClick={onButtonClick}>Change</button>
            </div>
            {!folded && <p>{answer}</p>}
        </div>
    );
}