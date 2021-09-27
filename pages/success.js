import { Center, Flex, Box, Heading } from '@chakra-ui/layout'
import SuccessIcon from '../components/Icons/SuccessIcon'
import Button from '../components/Button'
const success = () => {
  return (
    <Center h='100vh' bgGradient='linear(#0070F3, #FF0080)'>
      <Flex
        direction='column'
        justify='space-around'
        align='center'
        bg='white'
        borderRadius={10}
        h='400px'
        w='350px'
      >
        <SuccessIcon />
        <Box>
          <Heading
            transform='translateY(-25px)'
            color='gray.600'
            as='h2'
            size='lg'
            textAlign='center'
          >
            Successful!
          </Heading>
          <Heading color='gray.800' as='h4' size='sm' mt={4}>
            Thanks for submitting the form
          </Heading>
        </Box>
        <Box>
          <Button link='/' color='white' bg='blue' shadowColor='blue'>
            Back to Site
          </Button>
        </Box>
      </Flex>
    </Center>
  )
}

export default success
