import {
  Box,
  Heading,
  Link,
  Text,
  VStack,
  HStack,
  Flex,
} from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import Image from 'next/image'

const DynamicNavbar = dynamic(() => import('../components/Navbar'), {
  ssr: false,
})
const dresstoimpress = () => {
  return (
    <>
      <DynamicNavbar />
      <Box maxW='1000px' margin='auto'>
        <Heading>Dress to Impress</Heading>
        <Text>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed sapiente
          commodi consequuntur quaerat obcaecati ipsum, ad nostrum deserunt
          pariatur, ex maxime blanditiis corporis tenetur numquam nemo et
          deleniti aliquam dolorem? Illo quidem doloremque assumenda a aliquam
          itaque ullam, beatae aliquid est inventore eveniet exercitationem odit
          nesciunt aspernatur id magnam accusantium.
        </Text>
        <HStack spacing={16}>
          <VStack align='start'>
            <Text fontWeight='600'>STACK</Text>
            <Text>WordPress</Text>
          </VStack>
          <VStack align='start'>
            <Text fontWeight='600'>LIVE</Text>
            <Link href='https://dresstoimpress.com.au' isExternal>
              View Site
            </Link>
          </VStack>
          <VStack align='start'>
            <Text fontWeight='600'>CODE</Text>
            <Link href='https://github.com/tmoran18' isExternal>
              View Code
            </Link>
          </VStack>
        </HStack>
        <Flex justify='center'>
          <Image src='/slide_1_1.jpg' width={855} height={855} alt='an image' />
        </Flex>
        <Heading>Project Goals</Heading>
        <Flex justify='center'>
          <Image src='/slide_1_1.jpg' width={855} height={855} alt='an image' />
        </Flex>
        <Heading>Another Heading</Heading>
      </Box>
    </>
  )
}

export default dresstoimpress
