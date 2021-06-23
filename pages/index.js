import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box } from '@chakra-ui/react'

import SVGBackground from '../components/SVGBackground/SVGBackground'

export default function Home() {
  return (
    <Box as='main'>
      <SVGBackground />
    </Box>
  )
}
