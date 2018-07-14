import React from 'react';
import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';

const Header = (props) => {
  return(
    <div>
        <Navbar collapseOnSelect>
          <Navbar.Header>
          <Navbar.Brand>
            <a onClick={() => { return props.dailyPokemon() }} >Poké Mart<br/>フレンドリィショップ</a>
          </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <Navbar.Text>Wallet <br/>E{props.wallet}</Navbar.Text>
            <Navbar.Text>Signed in as {props.user} <br/><Navbar.Link href='/'>Log Out</Navbar.Link></Navbar.Text>
        </Nav>
      </Navbar>
    </div>
  )
}

export default Header;