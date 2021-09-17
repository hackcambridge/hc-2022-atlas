import { RouteComponentProps } from "@reach/router";
import React from "react";
import Body from "../../body/containers/Body";
import MovingBackground from "./MovingBackground";

export type HomeProps = {
    background:string,
} & RouteComponentProps;

export default function Home({background}:HomeProps) {
    return (<div id="content">
        <MovingBackground background={background}>
          {/* TEST BACKGROUND */}
          <Body />
        </MovingBackground>
      </div>);
}