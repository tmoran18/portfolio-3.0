import { Flex, Image } from '@chakra-ui/react'

const Hero = () => {
  return (
    <Flex justify='center' bg='black'>
      <Image
        src={'/smiley.webp'}
        width={1920}
        height='auto'
        alt='A brush strok smiling face'
      />
    </Flex>
  )
}

export default Hero
