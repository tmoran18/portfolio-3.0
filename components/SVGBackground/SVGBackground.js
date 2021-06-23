import { Box } from '@chakra-ui/react'
import styles from './index.module.css'
const SVGBackground = () => {
  return (
    <Box
      position='absolute'
      className={styles.bg}
      w='100vw'
      height='100vh'
    ></Box>
  )
}

export default SVGBackground
