import React from "react";
import "./SponsorShowcase.scss";
import Slider from "react-slick";
import { useState } from "react";
import { useWindowResize } from "../../shared/util/useWindowResize";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Fade from 'react-reveal';

export type SponsorShowcaseInfo = {
  sponsor: string;
  logo: string;
  text: string;
};
export type SponsorShowcaseProps = {
  sponsors: SponsorShowcaseInfo[];
};

const PrevArrow = (props: any) => {
  return (
    <div className={"prev-arrow arrow"} onClick={props.onClick}>
      <AiOutlineLeft />
    </div>
  );
};

const NextArrow = (props: any) => {
  return (
    <div className={"next-arrow arrow"} onClick={props.onClick}>
      <AiOutlineRight />
    </div>
  );
};

export function SponsorShowcaseCard({
  sponsor,
  isCurrent,
}: {
  sponsor: SponsorShowcaseInfo;
  isCurrent: boolean;
}) {
  return (
    <div className={"SponsorShowcaseCard"}>
      <div className={"sponsor-logo"} style={{ backgroundImage: `url(${sponsor.logo})` }}></div>
      {isCurrent && <p>{sponsor.text}</p>}
    </div>
  );
}

export default function SponsorShowcase({ sponsors }: SponsorShowcaseProps) {
  const { width, height } = useWindowResize();
  const [imgIdx, setImgIdx] = useState(0);
  return (
    <Fade top>
    <div className="SponsorShowcase">
      <h1>Sponsor Showcase</h1>
      <div className="slider-container">
        <Slider
          slidesToShow={width < 600 ? 1 : 3}
          centerMode={true}
          centerPadding={"0"}
          initialSlide={0}
          beforeChange={(current, next) => setImgIdx(next)}
          prevArrow={<PrevArrow />}
          nextArrow={<NextArrow />}
        >
          {sponsors.map((sponsor, idx) => (
            <div className={idx === imgIdx ? "slide active-slide" : "slide"}>
              {/* <img src={sponsor.logo}/> */}
              <SponsorShowcaseCard
                sponsor={sponsor}
                isCurrent={idx === imgIdx}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </Fade>
  );
}
