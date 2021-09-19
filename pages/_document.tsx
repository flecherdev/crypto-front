import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }

  render() {
    return (
      <Html>
        <Head>
          {/* favicon */}
          {/* webfont */}
          {/* styles */}
          {/* scripts */}
        </Head>
        <body className="mi-style">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
