import styled from "styled-components";
import { Link as GatsbyLink } from "gatsby";

export const Container = styled.div`
  z-index: 1050;
  position: relative;
`;

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
  color: #7c759a;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    width: 100%;
    margin: 0;
  }
`;

export const Logo = styled(GatsbyLink)`
  font-size: 16px;
  @media (min-width: 768px) {
    font-size: 18px;
    grid-column: 2 / span 1;
    justify-self: center;
  }
`;

export const Contact = styled(GatsbyLink)`
  display: none;
	@media (min-width: 768px) {
		display: block;
    justify-self: end;
    margin-right: 10%;
	}
`;
