import { Link } from 'gatsby'
import React from 'react'
import { Spring, config } from 'react-spring/renderprops'
import styled from 'styled-components'
import { Button } from '../Button/Button'

const Dfeature = styled.div`
  display: none;
  @media screen and (min-width: 600px) {
    display: block;
    position: fixed;
    background-color: white;
    z-index: 99;
    bottom: 50px;
    border: 1px solid rgba(144, 144, 144, 0.15);
    height: 50px;
    width: 100%;
    z-index: 1001;
  }
`

const Mfeature = styled.div`
  display: block;
  position: fixed;
  background-color: white;
  bottom: 100px;
  border: 1px solid rgba(144, 144, 144, 0.15);
  height: 50px;
  width: 100%;
  z-index: 99;
  @media screen and (min-width: 600px) {
    display: none;
  }
`

const FeatureSelected = styled.div`
  background-color: white;
  width: 40%;
  margin: 0 auto;
  display: grid;
  grid-auto-rows: 50px;
  grid-template-columns: 1fr;
  font-size: 14px;
  place-content: center;
  place-items: center;
  grid-gap: 10px;
  max-width: 600px;
  @media screen and (min-width: 600px) {
    width: 120px;
    grid-gap: 30px;
  }
`

const WebappPopup = () => {
  return (
    <div>
      <Spring
        from={{ bottom: -50 }}
        to={{
          bottom: 0,
        }}
        config={config.slow}
        delay={15000}
      >
        {(props) => (
          <Dfeature style={props}>
            <FeatureSelected>
              <Link to="/contact">
                <Button>SignUp Now!</Button>
              </Link>
            </FeatureSelected>
          </Dfeature>
        )}
      </Spring>
      <Spring
        from={{ bottom: -1 }}
        to={{
          bottom: 50,
        }}
        config={config.slow}
        delay={15000}
      >
        {(props) => (
          <Mfeature style={props}>
            <FeatureSelected>
              <Link to="/contact">
                <Button>SignUp Now</Button>
              </Link>
            </FeatureSelected>
          </Mfeature>
        )}
      </Spring>
    </div>
  )
}

export default WebappPopup
