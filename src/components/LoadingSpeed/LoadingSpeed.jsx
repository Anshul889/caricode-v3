import React from 'react'
import { Spring, config } from 'react-spring/renderprops-universal'
import styled from 'styled-components'
import check from '../../images/check.svg'
import cross from '../../images/cross.svg'

const Speed = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  grid-gap: 30px;
  img {
    display: block;
    width: 25px;
    margin: 0 auto;
  }
`

const Slow = styled.div`
  position: relative;
`

const LoadingSpeed = () => {
  return (
    <Speed>
      <div>
        <Spring
          from={{
            a: '40',
            b: '40',
            c: '40',
            d: '100',
            e: '40',
            f: '160',
            g: '40',
            h: '220',
            i: '40',
            j: '280',
          }}
          to={{
            a: '150',
            b: '40',
            c: '250',
            d: '100',
            e: '200',
            f: '160',
            g: '260',
            h: '220',
            i: '280',
            j: '280',
          }}
          config={config.molasses}
          delay={800}
        >
          {(props) => (
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fad"
              data-icon="mobile"
              class="svg-inline--fa fa-mobile fa-w-10"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              style={{
                paddingBottom: '18px',
                height: '100px',
                margin: '0 auto',
              }}
            >
              <g class="fa-group">
                <path
                  class="fa-secondary"
                  fill="black"
                  d="M0 384v80a48 48 0 0 0 48 48h224a48 48 0 0 0 48-48v-80zm160 96a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"
                  opacity="0.4"
                ></path>
                <path
                  class="fa-primary"
                  fill="currentColor"
                  d="M0 384V48A48 48 0 0 1 48 0h224a48 48 0 0 1 48 48v336z"
                ></path>
                <line
                  x1="40"
                  y1="40"
                  x2={props.a}
                  y2={props.b}
                  style={{
                    stroke: 'rgb(18, 147, 154)',
                    strokeWidth: '4',
                  }}
                />
                <line
                  x1="40"
                  y1="100"
                  x2={props.c}
                  y2={props.d}
                  style={{
                    stroke: 'rgb(18, 147, 154)',
                    strokeWidth: '4',
                  }}
                />
                <line
                  x1="40"
                  y1="160"
                  x2={props.e}
                  y2={props.f}
                  style={{
                    stroke: 'rgb(18, 147, 154)',
                    strokeWidth: '4',
                  }}
                />
                <line
                  x1="40"
                  y1="220"
                  x2={props.g}
                  y2={props.h}
                  style={{
                    stroke: 'rgb(18, 147, 154)',
                    strokeWidth: '4',
                  }}
                />
                <line
                  x1="40"
                  y1="280"
                  x2={props.i}
                  y2={props.j}
                  style={{
                    stroke: 'rgb(18, 147, 154)',
                    strokeWidth: '4',
                  }}
                />
              </g>
            </svg>
          )}
        </Spring>
        <img src={check} height={25} alt="" />
      </div>
      <Slow>
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fad"
          data-icon="mobile"
          class="svg-inline--fa fa-mobile fa-w-10"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
          style={{
            paddingBottom: '18px',
            height: '100px',
            margin: '0 auto',
          }}
        >
          <g class="fa-group">
            <path
              class="fa-secondary"
              fill="black"
              d="M0 384v80a48 48 0 0 0 48 48h224a48 48 0 0 0 48-48v-80zm160 96a32 32 0 1 1 32-32 32 32 0 0 1-32 32z"
              opacity="0.4"
            ></path>
            <path
              class="fa-primary"
              fill="currentColor"
              d="M0 384V48A48 48 0 0 1 48 0h224a48 48 0 0 1 48 48v336z"
            ></path>
          </g>
        </svg>
        <svg
          style={{
            margin: 'auto',
            background: 'black',
            display: 'block',
            'shape-rendering': 'auto',
            position: 'absolute',
            top: '10%',
            left: '12px',
          }}
          width="40px"
          height="40px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <g transform="rotate(0 50 50)">
            <rect
              x="47"
              y="24"
              rx="3"
              ry="6"
              width="6"
              height="12"
              fill="rgb(18, 147, 154)"
            >
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.9166666666666666s"
                repeatCount="indefinite"
              ></animate>
            </rect>
          </g>
          <g transform="rotate(30 50 50)">
            <rect
              x="47"
              y="24"
              rx="3"
              ry="6"
              width="6"
              height="12"
              fill="rgb(18, 147, 154)"
            >
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.8333333333333334s"
                repeatCount="indefinite"
              ></animate>
            </rect>
          </g>
          <g transform="rotate(60 50 50)">
            <rect
              x="47"
              y="24"
              rx="3"
              ry="6"
              width="6"
              height="12"
              fill="rgb(18, 147, 154)"
            >
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.75s"
                repeatCount="indefinite"
              ></animate>
            </rect>
          </g>
          <g transform="rotate(90 50 50)">
            <rect
              x="47"
              y="24"
              rx="3"
              ry="6"
              width="6"
              height="12"
              fill="rgb(18, 147, 154)"
            >
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.6666666666666666s"
                repeatCount="indefinite"
              ></animate>
            </rect>
          </g>
          <g transform="rotate(120 50 50)">
            <rect
              x="47"
              y="24"
              rx="3"
              ry="6"
              width="6"
              height="12"
              fill="rgb(18, 147, 154)"
            >
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.5833333333333334s"
                repeatCount="indefinite"
              ></animate>
            </rect>
          </g>
          <g transform="rotate(150 50 50)">
            <rect
              x="47"
              y="24"
              rx="3"
              ry="6"
              width="6"
              height="12"
              fill="rgb(18, 147, 154)"
            >
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.5s"
                repeatCount="indefinite"
              ></animate>
            </rect>
          </g>
          <g transform="rotate(180 50 50)">
            <rect
              x="47"
              y="24"
              rx="3"
              ry="6"
              width="6"
              height="12"
              fill="rgb(18, 147, 154)"
            >
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.4166666666666667s"
                repeatCount="indefinite"
              ></animate>
            </rect>
          </g>
          <g transform="rotate(210 50 50)">
            <rect
              x="47"
              y="24"
              rx="3"
              ry="6"
              width="6"
              height="12"
              fill="rgb(18, 147, 154)"
            >
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.3333333333333333s"
                repeatCount="indefinite"
              ></animate>
            </rect>
          </g>
          <g transform="rotate(240 50 50)">
            <rect
              x="47"
              y="24"
              rx="3"
              ry="6"
              width="6"
              height="12"
              fill="rgb(18, 147, 154)"
            >
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.25s"
                repeatCount="indefinite"
              ></animate>
            </rect>
          </g>
          <g transform="rotate(270 50 50)">
            <rect
              x="47"
              y="24"
              rx="3"
              ry="6"
              width="6"
              height="12"
              fill="rgb(18, 147, 154)"
            >
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.16666666666666666s"
                repeatCount="indefinite"
              ></animate>
            </rect>
          </g>
          <g transform="rotate(300 50 50)">
            <rect
              x="47"
              y="24"
              rx="3"
              ry="6"
              width="6"
              height="12"
              fill="rgb(18, 147, 154)"
            >
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="-0.08333333333333333s"
                repeatCount="indefinite"
              ></animate>
            </rect>
          </g>
          <g transform="rotate(330 50 50)">
            <rect
              x="47"
              y="24"
              rx="3"
              ry="6"
              width="6"
              height="12"
              fill="rgb(18, 147, 154)"
            >
              <animate
                attributeName="opacity"
                values="1;0"
                keyTimes="0;1"
                dur="1s"
                begin="0s"
                repeatCount="indefinite"
              ></animate>
            </rect>
          </g>
        </svg>
        <img src={cross} height={25} alt="" />
      </Slow>
    </Speed>
  )
}

export default LoadingSpeed
