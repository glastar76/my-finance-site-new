// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2477753161296870"
     crossorigin="anonymous"></script>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="See your money clearly. EyeOnFinance helps you plan your finances with clarity." />
        <meta property="og:title" content="EyeOnFinance - See your money clearly" />
        <meta property="og:description" content="Plan your paycheck, track debt, and reach your savings goals." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://my-finance-site-new.vercel.app" />
      </Head>
      <body className="bg-gray-900 text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
