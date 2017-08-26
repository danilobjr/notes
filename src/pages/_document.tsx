import * as React from 'react';
import Document, {Head, Main, NextScript} from 'next/document';
import flush from 'styled-jsx/server';

export default class MyDocument extends Document {
  static getInitialProps ({req, renderPage}: any) {
    const {html, head, errorHtml, chunks} = renderPage();
    const styles = flush();

    return {
      chunks,
      errorHtml,
      head,
      html,
      styles,
    };
  }

  render () {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

          <link href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,500,700" rel="stylesheet" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.css" rel="stylesheet" />
          <link href="/static/styles.css" rel="stylesheet" />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
