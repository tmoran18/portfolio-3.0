import '../styles/globals.css'
import '@fontsource/inter'

import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    blue: '#0070F3',
    green: 'rgb(12, 206, 107)',
    purple: 'rgb(121, 40, 202)',
    pink: 'rgb(255, 0, 128)',
  },
  fonts: {
    heading: 'Inter',
    body: 'Inter',
  },
})
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
