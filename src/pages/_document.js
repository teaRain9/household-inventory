import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400&family=Lato&display=swap"
        rel="stylesheet"
      ></link>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
