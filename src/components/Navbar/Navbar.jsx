import React from "react";
import {
  Container,
  DesktopNavigation,
  Logo,
  MobileContact,
  DItem,
  Left,
  Right,
} from "./style.js";
import { Button } from "../Button/Button.js";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <Container>
      <DesktopNavigation>
        <Logo>
          <span style={{ color: "#7c759a" }}>CARI</span>
          <span style={{ color: "hsla(0, 0%, 75%, 1)" }}>CODE</span>
        </Logo>
        <MobileContact>
          <Button>Contact</Button>
        </MobileContact>
        <Left>
          <DItem>
            <Link activeStyle={{ color: "#7c759a" }} to="/blogs">
              Blogs
            </Link>
          </DItem>
          <DItem>
            <Link activeStyle={{ color: "#7c759a" }} to="/landing-pages/">
              Landing Pages
            </Link>
          </DItem>
          <DItem>
            <Link activeStyle={{ color: "#7c759a" }} to="/ui-ux/">
              UI/UX
            </Link>
          </DItem>
          <DItem>
            <Link activeStyle={{ color: "#7c759a" }} to="/web-applications/">
              Applications
            </Link>
          </DItem>
          <DItem>
            <Link activeStyle={{ color: "#7c759a" }} to="/ecommerce/">
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
    </Container>
  );
};

export default Navbar;
