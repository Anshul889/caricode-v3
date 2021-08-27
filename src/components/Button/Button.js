import styled, { css } from 'styled-components'

export const Button = styled.button`
  color: white;
  background-color: #484459;
  text-decoration: none;
  display: inline-block;
  font-weight: 600;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  border-radius: 4px;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;
  text-transform: uppercase;
  ${(props) =>
    props.secondary &&
    css`
      display: block;
      background: white;
      color: black;
      border: 1px solid rgba(104, 104, 104, 0.15);
      cursor: pointer;
      display: inline-block;
      font-size: 0.75em;
      font-weight: 400;
      height: 3.7em;
      letter-spacing: 0.13em;
      padding: 0.375rem
      width: 200px;
    `};
`
