import React from "react";
import './Body.css';

export type BodyProp = {

};

export default function Body({}: BodyProp) {
    return (
        <div className="test">
            <a href="/">Something</a>
        </div>
    );
}