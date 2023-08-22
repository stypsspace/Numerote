import Layout from '@/components/layout';
import 'src/app/styles/globals.css';
// import 'typeface-inter';
import Head from 'next/head'; // Import the Head component


export default function App({ Component, pageProps }) {
  return (

    <>
    {/* Place the viewport meta tag in the Head component */}
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>


    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>

  );
}
