<<<<<<< HEAD
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Header from '../components/Header'
import About from '../components/About'
import Work from '../components/Work'
import Banner from '../components/Banner'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import dynamic from 'next/dynamic'
import Skills from '../components/Skills'
import { Box, Button } from '@chakra-ui/react'
=======
import Head from "next/head";
import Hero from "../components/Hero";
import Header from "../components/Header";
import About from "../components/About";
import Work from "../components/Work";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import dynamic from "next/dynamic";
>>>>>>> 748e0dc9a6d6dd9d88227867949ea2e2437c8d0d

const DynamicNavbar = dynamic(() => import("../components/Navbar"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Tim Moran - Frontend Developer Brisbane</title>
        <meta
          name="description"
          content="I am a Brisbane based web developer with a passion for producing custom websites &amp; applications for small to medium businesses. ReactJS, HTML, CSS, JavaScript, NextJS"
        ></meta>
        <meta
          name="keywords"
          content="freelance web developer, website developer, web developer brisbane, react developer, nextJS developer, static site generator developer, website developer brisbane"
        ></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <DynamicNavbar />
      <Hero />
      <Header />

      <Skills />

      <About />
      <Work />
      <Banner />

      <Services />
      <Contact />
      <Footer />
    </>
  );
}
