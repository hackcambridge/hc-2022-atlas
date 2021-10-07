import React, { useState } from "react";
import FAQTextBox from "../components/FAQTextBox";
import "./FAQ.scss";

export type FAQProps = {
  qs: { question: string; answer: string }[];
};

export default function FAQ({ qs }: FAQProps) {
  const [openQuestion, setOpenQuestion] = useState(-1);
  return (
    <div className="FAQ">
      <div className="faq-col faq-col-1"></div>
      <div className="faq-col faq-col-2">
        <h1>Frequently Asked Questions</h1>
        {qs.map((qObject, i) =>
          i === openQuestion ? (
            <FAQTextBox
              key={qObject.question}
              {...qObject}
              folded={false}
              onButtonClick={
                // Event handler for when FAQ text box is unfolded
                (e) => {
                  e.preventDefault();
                  setOpenQuestion(-1);
                }
              }
            />
          ) : (
            <FAQTextBox
              key={qObject.question}
              {...qObject}
              folded={true}
              onButtonClick={
                // Event handler for when FAQ text box is folded
                (e) => {
                  e.preventDefault();
                  setOpenQuestion(i);
                }
              }
            />
          )
        )}
      </div>
    </div>
  );
}
