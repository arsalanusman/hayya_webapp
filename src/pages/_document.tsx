import Document, { Html, Head, Main, NextScript } from "next/document";
import { withRouter } from 'next/router';
import type { DocumentProps } from "next/document";
import i18nextConfig from "../../next-i18next.config";

type Props = DocumentProps & {
  // add custom document props
};

class MyDocument extends Document<Props> {
  render() {
    const currentLocale =
      this.props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale;
    return (
      <Html lang={currentLocale}>
        <Head>
          <meta charSet="utf-8" />
          <link href="/styles/globals.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
