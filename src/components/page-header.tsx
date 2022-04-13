import React, { FC, useState } from "react"
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
        tag={(props) => {
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

const PageHeader: FC = (props) => {
  const [collapsed, setCollapsed] = useState(false)

  const toggle = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand to="/" tag={(props) => <Link {...props} />} className="mr-auto">
          <img alt="Digitale Oberlausitz e.V." src={require("../../content/images/logo_transparent.png")?.default} />
          Digitale Oberlausitz e.V.
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={collapsed} navbar className="align-self-end">
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

export default PageHeader
