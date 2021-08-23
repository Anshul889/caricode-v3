import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import { useTransition, animated } from "react-spring";

const Border = () => {
  const AnimatedBorder = styled.div`
    height: 1px;
    background-color: rgba(144, 144, 144, 0.25);
    width: 50px;
    margin-left: 1px;
  `;
  return (
    <div>
      <VisibilitySensor>
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
              <div className="hero-feature-border" style={props}></div>
            )}
          </Spring>
        )}
      </VisibilitySensor>
    </div>
  );
};

export default Border;
