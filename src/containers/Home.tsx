import { RouteComponentProps } from "@reach/router";
import React from "react";
import MovingBackground from "./MovingBackground";

export type HomeProps = {
    background:string,
} & RouteComponentProps;

export default function Home({background}:HomeProps) {
    return (<div id="content">
        <MovingBackground background={background}>
          {/* TEST BACKGROUND */}
          <div style={{height: "120vh"}}></div>
        </MovingBackground>
      </div>);
}