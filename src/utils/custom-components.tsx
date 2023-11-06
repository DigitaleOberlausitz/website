import React, { FC, ReactNode } from "react"
import * as prod from "react/jsx-runtime"
import rehypeReact, { Options } from "rehype-react"
import type { Parent } from "mdast"

import Obfuscate from "react-obfuscate"

import { toJsxRuntime } from "hast-util-to-jsx-runtime"
import { Nodes } from "mdast";

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

const options: Options = {
  // @ts-expect-error: react types are missing
  Fragment: prod.Fragment,
  // @ts-expect-error: react types are missing
  jsx: prod.jsx,
  // @ts-expect-error: react types are missing
  jsxs: prod.jsxs,
  components: {
    //@ts-ignore
    obfuscate: ObfuscateComponent,
  },
}

export function renderAst(htmlAst: any): ReactNode {
  return toJsxRuntime(htmlAst, options)
}
