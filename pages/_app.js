import '../styles/globals.css';


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
  // pages/_app.js
import Script from 'next/script';

<Head>
  <script async src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX`}></script>
  <script dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-VF040WZY3W');
    `}} />
</Head>
  );
}

export default MyApp;

}
