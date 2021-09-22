import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

export const Container = styled.div`
  z-index: 1050;
  position: relative;
`

export const DesktopNavigation = styled.div`
  padding: 0;
  box-sizing: content-box;
  margin: 0 auto;
  max-width: 65rem;
  width: 90%;
  align-items: center;
  display: grid;
  grid-template-columns: min-content 1fr 1fr;
  grid-template-rows: 56px;
  background: 0 0;
  z-index: 1009;
  font-weight: 400;
  font-size: 15px;
  color: #ff8f83;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    width: 100%;
    margin: 0;
  }
`

export const Logo = styled(GatsbyLink)`
  font-size: 16px;
  font-family: 'Averta';
  @media (max-width: 768px) {
    font-size: 18px;
    grid-column: 2 / span 1;
    justify-self: center;
  }
`

export const MobileContact = styled(GatsbyLink)`
  display: none;
  @media (max-width: 768px) {
    display: block;
    justify-self: end;
    margin-right: 10%;
    button {
      font-size: 12px;
      line-height: 1.33337;
      padding: 4px 11px;
    }
  }
`

export const Left = styled.ul`
  align-items: center;
  display: grid;
  grid-template-columns: repeat(5, max-content);
  justify-content: center;
  line-height: 1.9;
  list-style: none;
  padding-left: 0;
  @media (max-width: 768px) {
    display: none;
  }
`

export const Right = styled.ul`
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  justify-content: end;
  line-height: 2;
  list-style: none;
  padding-left: 0;
  text-transform: uppercase;
  @media (max-width: 768px) {
    display: none;
  }
`

export const DItem = styled.li`
  margin-left: 1.2em;
  font-size: 14.75px;
  letter-spacing: 1.9175px;
  line-height: 28px;
`

/*Bottom Nav */

export const MobileNav = styled.div`
  position: fixed;
  background-color: white;
  width: 100%;
  z-index: 100;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid rgba(144, 144, 144, 0.15);
  height: 50px;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const MItem = styled(GatsbyLink)`
  font-size: 0.6rem;
  letter-spacing: 0.0075rem;
  text-decoration: none;
  color: #444;
  filter: grayscale(100%);
  opacity: 0.3;
`

export const MItemImg = styled.img`
  height: 26px;
  display: block;
  padding: 0;
  margin: 0 auto;
  margin-top: 3px;
`

export const MText = styled.div`
  font-size: 12px;
`
