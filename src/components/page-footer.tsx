import React from "react"

import { Link } from "gatsby"

const PageFooter = () => (
  <footer className="footer" style={{ marginTop: "4em" }}>
    <p>
      {'© Digitale Oberlausitz e.V. 2018 | '}
      <Link to="/impressum">Impressum</Link>
      {' | '}
      <Link to="/datenschutz">Datenschutz</Link>
      {' | '}
      <Link to="/internes">Internes</Link>
    </p>
  </footer>
)

export default PageFooter
