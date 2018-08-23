import React from "react"
import Link from "gatsby-link"

import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Collapse } from "reactstrap"

const LinkItem = ({ to, children }) => {
  return (
    <NavItem>
      <NavLink
        className="link-item"
        tag={props => {
          return (
            <Link {...props} to={to} activeClassName="active">
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
        <Navbar color="light" light expand="sm">
          <NavbarBrand to="/" tag={props => <Link {...props} />} className="mr-auto">
            Digitale Oberlausitz e.V.
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.collapsed} navbar>
            <Nav className="ml-auto" navbar>
              <LinkItem to="/">Aktuelles</LinkItem>
              <LinkItem to="/events">Veranstaltungen</LinkItem>
              <LinkItem to="/verein">Verein</LinkItem>
              <LinkItem to="/projekte">Projekte</LinkItem>
              <LinkItem to="/mitmachen">Mitmachen</LinkItem>
              <LinkItem to="/foerdermitglieder">Fördermitglieder</LinkItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default PageHeader
