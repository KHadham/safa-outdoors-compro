import { Head, Html, Main, NextScript } from "next/document";
import React from "react";

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="A company profile of Safa-Outdoor Company. Its company that serve for any Outdoor Services, such as rent ,guide, tour, camping, hiking, etc."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="tags"
          content="rent ,guide, tour, camping, hiking, profile, travel, outdoor, services, safa-outdoor"
        />
        <link
          rel="shortcut icon"
          href="/images/favicon.png"
          type="image/x-icon"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
