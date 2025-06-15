import '../styles/globals.css';


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
  // pages/_app.js
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-GNG3TTGSFD');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

}
