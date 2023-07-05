import styled from 'styled-components'

export const Container = styled.div``

export const Inner = styled.div`
  width: 90%;
  margin: 30px auto 75px auto;
  display: grid;
  grid-template-columns: 1fr;
  max-width: 1000px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 80px;
  }
`

export const CTAHeader = styled.h2`
  @media screen and (min-width: 768px) {
    grid-column: 1 / 3;
  }
`

export const CTAText = styled.div`
  line-height: 29.12px;
  letter-spacing: 0.02em;
  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
    padding-top: 15px;
  }
`

export const CTABtn = styled.button`
  color: white;
  background-color: #444;
  text-decoration: none;
  display: inline-block;
  font-weight: 600;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  height: 2.75em;
  line-height: 2.75em;
  padding: 0 1.5em;
  border-radius: 4px;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 16px;
`
