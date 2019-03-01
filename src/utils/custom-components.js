import React from "react"
import rehypeReact from "rehype-react"
import EmailObfuscate from 'email-obfuscate'

import Obfuscate from 'react-obfuscate'


class EmailLinkCanvas extends React.Component {
  componentDidMount() {
    EmailObfuscate(this.el,
      {
        name: this.props.name,
        domain: this.props.domain,
        tld: this.props.tld
      })
  }

  render() {
    return <div ref={el => this.el = el} />
  }
}

const ObfuscateComponent = ({email, tel}) => (
    <Obfuscate email={email} tel={tel}/>
)


export const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    "email-link": EmailLinkCanvas,
    "obfuscate": ObfuscateComponent
  }
}).Compiler