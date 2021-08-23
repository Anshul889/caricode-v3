import React from "react";
import { Container, DesktopNavigation, Logo, Contact } from "./style.js";
import {Button} from '../Button/Button.js'

const Navbar = () => {
  return (
    <Container>
      <DesktopNavigation>
        <Logo>
          <span style={{ color: "#7c759a" }}>CARI</span>
          <span style={{ color: "hsla(0, 0%, 75%, 1)" }}>CODE</span>
        </Logo>
				<Contact>
					<Button>Contact</Button>
				</Contact>
      </DesktopNavigation>
    </Container>
  );
};

export default Navbar;
