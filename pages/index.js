import Head from 'next/head';
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
  return (
    <section id='home'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
    </section>
  )
}
