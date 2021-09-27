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

const DynamicNavbar = dynamic(() => import('../components/Navbar'), {
  ssr: false,
})

export default function Home() {
  return (
    <>
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
  )
}
