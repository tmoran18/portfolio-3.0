import { Box, Flex, Heading } from '@chakra-ui/layout'
import Button from './Button'
const Banner = () => {
  return (
    <Box bg='blue' minH='12rem' margin='auto'>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        maxW='1000px'
        margin='auto'
        minH='12rem'
        align='center'
        justify={{ base: 'space-around' }}
        textAlign='center'
      >
        <Heading as='h3' size='xl' color='white'>
          Lets build your project!
        </Heading>
        <Button link='/#contact' color='white' bg='black'>
          Get in Touch
        </Button>
      </Flex>
    </Box>
  )
}

export default Banner
