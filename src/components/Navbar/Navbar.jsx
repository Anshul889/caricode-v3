import React from "react";
import {
  Container,
  DesktopNavigation,
  Logo,
  MobileContact,
  DItem,
  Left,
  Right,
  MItem,
  MItemImg,
  MText,
	MobileNav,
} from "./style.js";
import { Button } from "../Button/Button.js";
import { Link } from "gatsby";
import uiux from './images/phone-laptop.svg'
import blog from './images/blog.svg'
import landingpage from './images/landingpage.svg'
import mobilenav from './images/mobile-nav.svg'
import shopping from './images/shopping-cart-purple.svg'

const Navbar = () => {
  return (
    <Container>
      <DesktopNavigation>
        <Logo to="/">
          <span style={{ color: "#7c759a" }}>CARI</span>
          <span style={{ color: "hsla(0, 0%, 75%, 1)" }}>CODE</span>
        </Logo>
        <MobileContact to="/contact/">
          <Button>Contact</Button>
        </MobileContact>
        <Left>
          <DItem>
            <Link activeStyle={{ color: "#ff8f83" }} to="/blogs">
              Blogs
            </Link>
          </DItem>
          <DItem>
            <Link activeStyle={{ color: "#ff8f83" }} to="/landing-pages/">
              Landing Pages
            </Link>
          </DItem>
          <DItem>
            <Link activeStyle={{ color: "#ff8f83" }} to="/ui-ux/">
              UI/UX
            </Link>
          </DItem>
          <DItem>
            <Link activeStyle={{ color: "#ff8f83" }} to="/web-applications/">
              Applications
            </Link>
          </DItem>
          <DItem>
            <Link activeStyle={{ color: "#ff8f83" }} to="/ecommerce/">
              Ecommerce
            </Link>
          </DItem>
        </Left>
        <Right>
          <Link to="/contact/">
            <Button>Contact</Button>
          </Link>
        </Right>
      </DesktopNavigation>
      <MobileNav>
        <MItem activeStyle={{ filter: 'grayscale(0%)', opacity: 1 }} to="/web-applications/">
          <MItemImg src={mobilenav}></MItemImg>
          <MText>Apps</MText>
        </MItem>
				<MItem activeStyle={{ filter: 'grayscale(0%)', opacity: 1 }} to="/ui-ux/">
          <MItemImg src={uiux}></MItemImg>
          <MText>UI/UX</MText>
        </MItem>
				<MItem activeStyle={{ filter: 'grayscale(0%)', opacity: 1 }} to="/ecommerce/">
          <MItemImg src={shopping}></MItemImg>
          <MText>Ecommerce</MText>
        </MItem>
				<MItem activeStyle={{ filter: 'grayscale(0%)', opacity: 1 }} to="/blogs/">
          <MItemImg src={blog}></MItemImg>
          <MText>Blogs</MText>
        </MItem>
				<MItem activeStyle={{ filter: 'grayscale(0%)', opacity: 1 }} to="/landing-pages/">
          <MItemImg src={landingpage}></MItemImg>
          <MText>Landing</MText>
        </MItem>
      </MobileNav>
    </Container>
  );
};

export default Navbar;
