import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 40px auto;
`

export const Item = styled.div`
  place-self: center;
`

export const Box = styled.div`
  height: 75px;
  width: 90px;
  border-radius: 4px;
  background-color: #0078d4;
  @media screen and (min-width: 768px) {
    width: 75px;
  }
  @media only screen and (width: 834px) and (height: 1194px) and (orientation: portrait) {
    width: 60px;
    height: 60px;
  }
`

export const SecondItem = styled(Item)`
  animation: opac 7s ease-in-out infinite forwards;
  @keyframes opac {
    0% {
      opacity: 1;
    }

    35% {
      opacity: 1;
    }

    45% {
      opacity: 0;
    }

    85% {
      opacity: 0;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
`

export const ThirdItem = styled(Item)`
  animation: moveleft 7s ease-in-out infinite forwards;
  @keyframes moveleft {
    0% {
      transform: translateX(0px);
    }
    40% {
      transform: translateX(0px);
    }

    60% {
      transform: translateX(-100px);
    }

    70% {
      transform: translateX(-100px);
    }

    85% {
      transform: translateX(0px);
    }

    100% {
      transform: translateX(0px);
    }
  }
  @media screen and (min-width: 768px) {
    animation: moveleftt 7s ease-in-out infinite forwards;
    @keyframes moveleftt {
      0% {
        transform: translateX(0px);
      }
      40% {
        transform: translateX(0px);
      }

      60% {
        transform: translateX(-75px);
      }

      70% {
        transform: translateX(-75px);
      }

      85% {
        transform: translateX(0px);
      }

      100% {
        transform: translateX(0px);
      }
    }
  }
  @media screen and (min-width: 1024px) {
    animation: moveleftd 7s ease-in-out infinite forwards;
    @keyframes moveleftd {
      0% {
        transform: translateX(0px);
      }
      40% {
        transform: translateX(0px);
      }

      60% {
        transform: translateX(-100px);
      }

      70% {
        transform: translateX(-100px);
      }

      85% {
        transform: translateX(0px);
      }

      100% {
        transform: translateX(0px);
      }
    }
  }
`
