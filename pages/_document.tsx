import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        {/* 确保 CSS 正确加载 */}
        <link rel="stylesheet" href="./globals.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 