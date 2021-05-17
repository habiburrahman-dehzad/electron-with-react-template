import React, { Component } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from 'mdbreact';

class Navbar extends Component {
  render() {
    return (
      <MDBNavbar color='info-color' dark expand='md'>
        <MDBNavbarBrand>
          <strong className='white-text'>Hypno App</strong>
        </MDBNavbarBrand>
        <MDBCollapse isOpen={true} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink to='/'>Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to='/test'>Test</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to='/file'>Read File</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to='/play'>Play Music</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className='waves-effect waves-light' to='#!'>
                <MDBIcon icon='cog' className='mr-1' />
                Settings
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon='user' className='mr-1' />
                  Profile
                </MDBDropdownToggle>
                <MDBDropdownMenu className='dropdown-default' right>
                  <MDBDropdownItem href='#!'>My account</MDBDropdownItem>
                  <MDBDropdownItem href='#!'>Log out</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Navbar;
