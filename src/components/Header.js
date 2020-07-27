import React, { Component } from "react";
import { Menu, Segment, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Header extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted>
        <Menu inverted secondary>
          <Menu.Item
            as={Link}
            to="/"
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />

          <Dropdown as={Link} to="/curriculum" item text="Curriculum">
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/topic">
                Topic
              </Dropdown.Item>
              <Dropdown.Item>Large</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item
            as={Link}
            to="/project"
            name="Project"
            active={activeItem === "messages"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            as={Link}
            to="/practice"
            name="Practice"
            active={activeItem === "friends"}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    );
  }
}

export default Header;
