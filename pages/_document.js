import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="See your money clearly. EyeOnFinance helps you plan your finances with clarity." />
        <meta property="og:title" content="EyeOnFinance - See your money clearly" />
        <meta property="og:description" content="Plan your paycheck, track debt, and reach your savings goals." />
        <meta property="og:image" content="/og-image.png" /> {/* Optional: if you add an Open Graph image */}
        <meta property="og:url" content="https://your-site-url.vercel.app" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
