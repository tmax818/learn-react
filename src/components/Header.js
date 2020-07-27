import React, { Component } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

class Header extends Component {
  state = {
    isOpen: false,
  };
  toggle = () => {
    this.setState((prev) => ({ isOpen: !prev.isOpen }));
  };
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand className="App-header" href="/">
            Learn-React
          </NavbarBrand>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Curriculum
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Week One
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>test</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
