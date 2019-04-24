import React from "react"
import Link from "gatsby-link"

import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Collapse } from "reactstrap"

const isActive = ({ isCurrent, isPartiallyCurrent, href }) => {
  const activeStyle = { className: "active nav-link link-item" }
  if (href === "/") {
    return isCurrent ? activeStyle : null
  } else {
    return isPartiallyCurrent ? activeStyle : null
  }
}

const LinkItem = ({ to, children }) => {
  return (
    <NavItem>
      <NavLink
        className="link-item"
        tag={props => {
          return (
            <Link {...props} to={to} getProps={isActive}>
              {children}
            </Link>
          )
        }}
      />
    </NavItem>
  )
}

class PageHeader extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      collapsed: false,
    }
  }

  toggle = () => {
    this.setState(prevState => ({ collapsed: !prevState.collapsed }))
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand to="/" tag={props => <Link {...props} />} className="mr-auto">
            <img alt="Digitale Oberlausitz e.V." src={require("../../content/images/logo_transparent.png")} />
            Digitale Oberlausitz e.V.
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.collapsed} navbar className="align-self-end">
            <Nav className="ml-auto" navbar>
              <LinkItem to="/">Aktuelles</LinkItem>
              <LinkItem to="/events">Veranstaltungen</LinkItem>
              <LinkItem to="/verein">Verein</LinkItem>
              <LinkItem to="/projekte">Projekte</LinkItem>
              <LinkItem to="/mitmachen">Mitmachen</LinkItem>
              <LinkItem to="/foerdermitglieder">Fördermitglieder</LinkItem>
              <LinkItem to="/kontakt">Kontakt</LinkItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default PageHeader
