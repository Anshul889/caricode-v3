import React from "react";
import {
  Container,
  BannerText,
  Heading,
  TagLine,
  Animation,
  Grid,
} from "./style";
import Lottie from "react-lottie";
import { Button } from "../Button/Button";
import animationData from "./website-development.json";

const Banner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Container>
      <Grid>
        <Animation>
          <Lottie options={defaultOptions} isStopped={false} />
        </Animation>
        <BannerText>
          <Heading>We Build, Deploy and Manage Progressive Web Apps</Heading>
          <TagLine>
            Take the online presence
            <br /> of your business to the next level
          </TagLine>
        </BannerText>
      </Grid>
    </Container>
  );
};
export default Banner;
