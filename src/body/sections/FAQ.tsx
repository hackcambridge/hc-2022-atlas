import "./FAQ.scss";
import FAQTextBox from "../components/FAQTextBox";
import hexagon from '../../shared/img/HexShadow.png';
import rocket from '../../shared/img/rocket.png';
import cube from '../../shared/img/cube.png';
import React, { useState } from "react";
import Fade from 'react-reveal';
import  { ScrollRotate } from 'react-scroll-rotate';

export type FAQProps = {
  qs: { question: string; answer: string }[];
};

export default function FAQ({ qs }: FAQProps) {
  const [openQuestion, setOpenQuestion] = useState(-1);
  return (
    <div className="FAQ">
        <div className="faq-col-2">
            <ScrollRotate loops = {1} method={"perc"} from = {60}> 
              <img src={rocket} alt="" id="FAQ-rocket" className="FAQ-dec"/>
            </ScrollRotate>
            <div id="FAQ-cube">
            <ScrollRotate loops = {-0.8} method={"perc"}> 
              <img src={cube} alt="" className="FAQ-dec"/>
            </ScrollRotate>
            </div>
        </div>
        <div className="faq-col-3">
          <Fade left>
            <h1 >FAQs</h1>
          </Fade>
          <Fade right>
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
          </Fade>
        </div>
    </div>
  );
}
