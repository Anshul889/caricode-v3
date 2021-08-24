import React from 'react'
import Lottie from 'react-lottie'
import animationData from './webapp.json'
import serverData from './cloud-server.json'
import reactData from './react-logo.json'
import {
  AppAnimations,
  AppHero,
  Description,
  Feature,
  FeatureHeading,
  FeatureP,
  MobileAnimation,
  Placeholder,
  PlaceholderImage,
  PlaceholderImages,
  ReactAnimation,
  SecondFeature,
  SecondFeatureHeading,
  SecondFeatureP,
  ServerAnimation,
  Title,
} from './webapp-style'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}
const cloudOptions = {
  loop: true,
  autoplay: true,
  animationData: serverData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}
const reactOptions = {
  loop: true,
  autoplay: true,
  animationData: reactData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const Webappbanner = () => {
  return (
    <AppHero>
      <div>
        <Title>Give your Web App the edge</Title>
        <Description>
          Create amazing experiences for the web in record time—without thinking
          once about servers or devops.
        </Description>
        <AppAnimations>
          <Feature>
            <FeatureP>The fastest possible</FeatureP>
            <FeatureHeading>web frontends</FeatureHeading>
            <ReactAnimation>
              <Lottie options={reactOptions} isStopped={false} />
            </ReactAnimation>
          </Feature>
          <MobileAnimation>
            <Lottie options={defaultOptions} isStopped={false} />
          </MobileAnimation>
          <PlaceholderImages>
            <PlaceholderImage></PlaceholderImage>
            <PlaceholderImage></PlaceholderImage>
          </PlaceholderImages>
          <Placeholder></Placeholder>
          <SecondFeature>
            <SecondFeatureP>Instant cloud-scale</SecondFeatureP>
            <SecondFeatureHeading>backend apis</SecondFeatureHeading>
            <ServerAnimation>
              {' '}
              <Lottie options={cloudOptions} isStopped={false} />
            </ServerAnimation>
          </SecondFeature>
        </AppAnimations>
      </div>
    </AppHero>
  )
}

export default Webappbanner
