import styled from 'styled-components'


export const UserChatBox1 = styled.div`
  width: 65%;
  padding: 4.5%;
  background-color: #0b7df1;
  color: white;
  border-radius: 10px;
  margin-left: 25%;
  margin-top: 20px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    width: 40%;
    margin-left: 50%;
    padding: 15px;
  }
  animation: opac 20s ease-in-out infinite forwards;
  @keyframes opac {
    0% {
      opacity: 0;
    }
    7% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    97% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`

export const UserChatBox2 = styled.div`
  width: 70%;
  padding: 5%;
  background-color: #0b7df1;
  color: white;
  border-radius: 10px;
  margin-left: 20%;
  margin-top: 20px;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    width: 30%;
    margin-left: 60%;
    padding: 15px;
  }
  animation: opaci 20s ease-in-out infinite forwards;
  @keyframes opaci {
    0% {
      opacity: 0;
    }
    59% {
      opacity: 0;
    }
    60% {
      opacity: 1;
    }
    97% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`

export const AiChatBox1 = styled.div`
  width: 70%;
  margin-right: 30%;
  padding: 4.5%;
  background-color: #d9d8dd;
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    width: 60%;
    margin-right: 30%;
    padding: 15px;
  }
  animation: opa 20s ease-in-out infinite forwards;
  @keyframes opa {
    0% {
      opacity: 0;
    }
    28% {
      opacity: 0;
    }
    31% {
      opacity: 1;
    }
    97% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`

export const AiChatBox2 = styled.div`
  width: 70%;
  padding: 5%;
  background-color: #d9d8dd;
  border-radius: 10px;
  animation: op 20s ease-in-out infinite forwards;
  @keyframes op {
    0% {
      opacity: 0;
    }
    77% {
      opacity: 0;
    }
    80% {
      opacity: 1;
    }
    97% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`

export const Typing1 = styled.div`
  position: relative;
  height: 10px;
  margin: 0px;
  animation: disappear 20s ease-in-out infinite forwards;
  @keyframes disappear {
    0% {
      opacity: 0;
      margin: 0px;
    }
    10% {
      opacity: 0;
      margin: 0px;
    }
    15% {
      opacity: 1;
      margin: 10px;
    }
    26% {
      opacity: 1;
      margin: 10px;
    }
    28% {
      opacity: 0;
      margin: 0px;
    }
    100% {
      opacity: 0;
      margin: 0px;
    }
  }

  span {
    content: '';
    animation: blink 1.5s infinite;
    animation-fill-mode: both;
    height: 10px;
    width: 10px;
    background: #3b5998;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 50%;

    &:nth-child(2) {
      animation-delay: 0.2s;
      margin-left: 15px;
    }

    &:nth-child(3) {
      animation-delay: 0.4s;
      margin-left: 30px;
    }
  }
  @keyframes blink {
    0% {
      opacity: 0.1;
    }
    20% {
      opacity: 1;
    }
    100% {
      opacity: 0.1;
    }
  }
`

export const Typing2 = styled.div`
  position: relative;
  height: 10px;
  margin: 0px;
  animation: disappear2 20s ease-in-out infinite forwards;
  @keyframes disappear2 {
    0% {
      opacity: 0;
      margin: 0px;
    }
    60% {
      opacity: 0;
      margin: 0px;
    }
    63% {
      opacity: 1;
      margin: 10px;
    }
    74% {
      opacity: 1;
      margin: 10px;
    }
    77% {
      opacity: 0;
      margin: 0px;
    }
    100% {
      opacity: 0;
      margin: 0px;
    }
  }

  span {
    content: '';
    animation: blink 1.5s infinite;
    animation-fill-mode: both;
    height: 10px;
    width: 10px;
    background: #3b5998;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 50%;

    &:nth-child(2) {
      animation-delay: 0.2s;
      margin-left: 15px;
    }

    &:nth-child(3) {
      animation-delay: 0.4s;
      margin-left: 30px;
    }
  }
  @keyframes blink {
    0% {
      opacity: 0.1;
    }
    20% {
      opacity: 1;
    }
    100% {
      opacity: 0.1;
    }
  }
`
