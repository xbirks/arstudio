import '../styles/style.scss'
import Head from 'next/head'
import Header from '../components/header.jsx';
import Footer from '../components/footer.jsx';


export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <script
          src="https://assets.calendly.com/assets/external/widget.js"
          type="text/javascript"
          async
        ></script>
    </Head>
      <Header />
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  )
}
