import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { Spring, config } from 'react-spring/renderprops'
import styled from "styled-components";

const AnimatedBorder = styled.div`
    height: 1px;
    background-color: rgba(144, 144, 144, 0.25);
    width: 50px;
    margin-left: auto;
    margin-right: auto;
  `;

const CenteredBorder = () => {
  
  return (
    <div>
      <VisibilitySensor offset={{
          bottom: 400
        }}>
        {({ isVisible }) => (
          <Spring
            from={{ width: "1px", marginBottom: "20px" }}
            to={{
              width: isVisible ? "50px" : "1px",
              marginBottom: "20px",
            }}
            config={config.slow}
            delay={800}
          >
            {(props) => (
              <AnimatedBorder style={props}></AnimatedBorder>
            )}
          </Spring>
        )}
      </VisibilitySensor>
    </div>
  );
};

export default CenteredBorder;
