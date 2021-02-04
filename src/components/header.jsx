import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderTag = styled.header``;

const List = styled.ul`
  display: flex;
  &:hover {
    background-color: salmon;
  }
`;

const Item = styled.li``;

const SLink = styled(Link)``;

class Header extends Component {
  render() {
    return (
      <HeaderTag>
        <List>
          <Item>
            <SLink to="/">Movies</SLink>
          </Item>
          <Item>
            <SLink to="/tv">TV</SLink>
          </Item>
          <Item>
            <SLink to="/search">Search</SLink>
          </Item>
        </List>
      </HeaderTag>
    );
  }
}

export default Header;
