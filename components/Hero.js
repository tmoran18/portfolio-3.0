import { Flex } from '@chakra-ui/react'
import Image from 'next/image'

const Hero = () => {
  return (
    <Flex justify='center' bg='black'>
      <Image
        src={'/smiley.webp'}
        width={1920}
        height={550}
        alt='A brush strok smiling face'
      />
    </Flex>
  )
}

export default Hero
