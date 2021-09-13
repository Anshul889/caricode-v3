import styled from "styled-components"

export const Popup = styled.div`
  background-color: #008272;
  height: 130px;
  width: 100%;
  grid-row: 1 /1;
  grid-column: 1 /2;
  border-radius: 4px;
  @media screen and (min-width: 830px) {
    width: 100%;
  }
  @media screen and (min-width: 1024px) {
    width: 90%;
    margin: 0 auto;
  }
`

export const Focus = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 65px 65px;
  margin: 30px 0;
  overflow: hidden;
  height: 130px;
  @media screen and (min-width: 600px) {
    margin: 0;
    transform: translateY(30px);
  }
`

export const Notification = styled.div`
  height: 50px;
  background-color: white;
  grid-column: 1/1;
  grid-row: 2/2;
  transform: translateY(65px);
  display: grid;
  place-content: center;
  width: 60%;
  margin-left: auto;
  border-radius: 4px 4px 0 0;
  animation: easeup 6s ease-in-out 2s infinite forwards;
  font-size: 14px;

  @keyframes easeup {
    0% {
      transform: translateY(65px);
    }
    15% {
      transform: translateY(16px);
    }

    60% {
      transform: translateY(16px);
    }

    75% {
      transform: translateY(65px);
    }
    100% {
      transform: translateY(65px);
    }
  }
  @media screen and (min-width: 730px) {
    font-size: 12px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 14px;
  }
`
