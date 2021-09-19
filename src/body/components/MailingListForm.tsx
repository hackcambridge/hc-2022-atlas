import React, { useRef } from 'react';
import './MailingListForm.css';

export type MailingListFormProps = {};

export default function MailingListForm({}: MailingListFormProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit: React.FormEventHandler<Element> = (e) => {
        e.preventDefault();
        // TODO: ADD TO MAILING LIST
        if (inputRef.current) {
            console.log(inputRef.current.value);
        }
    };
    return <form className="MailingListForm" onSubmit={handleSubmit}>
        <input type="email" name="email" id="mailing-list-email" ref={inputRef}/>
        <input type="submit" name="submit" id="mailing-list-submit" value="Join"/>
    </form>;
};