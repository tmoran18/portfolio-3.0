import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box, Flex, Center, Heading, Text } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Header from '../components/Header'
import About from '../components/About'
import Work from '../components/Work'
import Banner from '../components/Banner'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero />
      <Header />
      <About />
      <Work />
      <Banner />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}
