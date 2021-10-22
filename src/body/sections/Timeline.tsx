import React from "react";
import "./Timeline.scss";
import { Fade } from "react-reveal";

export type TimelineProps = {
  timelinePhoto: string;
};

export default function Timeline({ timelinePhoto }: TimelineProps) {
  return (
    <Fade down>
      <div className="Timeline">
        <h1>Where to start..</h1>
        <img src={timelinePhoto} alt="Timeline" />
      </div>
    </Fade>
  );
}
