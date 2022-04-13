import React, { FC } from "react"
import rehypeReact from "rehype-react"

import Obfuscate from "react-obfuscate"

type Props = {
  email: string
  tel: string
}
const ObfuscateComponent: FC<Props> = ({ email, tel }) => <Obfuscate email={email} tel={tel} />

declare namespace JSX {
  interface IntrinsicElements {
    obfuscate: HTMLElement
  }
}

export const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    //@ts-ignore
    obfuscate: ObfuscateComponent,
  },
}).Compiler
