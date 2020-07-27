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
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                  </DropdownMenu>
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
