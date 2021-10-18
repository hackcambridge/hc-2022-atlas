import "./FAQ.scss";
import FAQTextBox from "../components/FAQTextBox";
import hexagon from '../../shared/img/HexShadow.png';
import donut from '../../shared/img/donut.png';
import React, { useState } from "react";
import Fade from 'react-reveal';

export type FAQProps = {
  qs: { question: string; answer: string }[];
};

export default function FAQ({ qs }: FAQProps) {
  const [openQuestion, setOpenQuestion] = useState(-1);
  return (
    <div className="FAQ">
        <div className="faq-col-1">
          <Fade left>
            <img src={hexagon} alt="" id="FAQ-hexagon" className="FAQ-dec"/>
          </Fade>
        </div>
        <div className="faq-col-2">
          <Fade left>
            <img src={donut} alt="" id="FAQ-donut" className="FAQ-dec"/>
          </Fade>
        </div>
        <div className="faq-col-3">
          <h1 className="title">Frequently Asked Questions</h1>
          {qs.map((qObject, i) =>
            i === openQuestion ? (
              <div className={i%2===1?"faq-col-3-1":"faq-col-3-2"}>
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
              </div>
            ) : (
          
              <div className={i%2===1?"faq-col-3-1":"faq-col-3-2"}>
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
              </div>
    
            )
          )}
        </div>
    </div>
  );
}
