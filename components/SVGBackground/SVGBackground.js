import { Box } from '@chakra-ui/react'
import styles from './index.module.css'
const SVGBackground = () => {
  return (
    <Box
      position='absolute'
      className={styles.bg}
      w='100vw'
      height='calc(100vh - 50px)'
    ></Box>
  )
}

export default SVGBackground
