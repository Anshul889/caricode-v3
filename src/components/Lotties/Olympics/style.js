import styled from 'styled-components'
import { Button } from '../../Button/Button'

export const Animation = styled.div`
  margin-bottom: 95px;
  z-index: -1;
  @media screen and (min-width: 768px) {
    height: 600px;
  }
`

export const Controls = styled.div`
  width: 95%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: max-content max-content 1fr;
  grid-gap: 15px;
  @media screen and (min-width: 768px) {
    grid-template-columns: max-content max-content 1fr;
    width: 90%;
  }
`

export const Speed = styled.div`
  align-self: center;
  justify-self: end;
  font-size: 20px;
  span {
    cursor: pointer;
  }

  span:first-child {
    cursor: initial;
  }
  span:nth-child(3){
    width: 25px;
  }
  @media screen and (min-width: 768px) {
    justify-self: end;
  }
`

export const PlayButton = styled(Button)`
  width: 70.94px;
`

export const Reverse = styled(Button)`
  width: 95.94px;
`
