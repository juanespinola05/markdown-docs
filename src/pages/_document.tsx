import { Html, Head, Main, NextScript } from 'next/document'
import { ReactElement } from 'react'

interface DocumentProps {
  dangerousAsPath: string
}

export default function Document ({ dangerousAsPath }: DocumentProps): ReactElement {
  const isCompose = dangerousAsPath.includes('compose')
  return (
    <Html lang='en'>
      <Head />
      <body className={isCompose ? 'overflow-hidden' : ''}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
