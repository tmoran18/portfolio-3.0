import { Flex, Box, Text, Heading } from '@chakra-ui/layout'
const ServiceCard = ({ title, description, children }) => {
  return (
    <Flex
      direction='column'
      w={80}
      boxShadow='xl'
      p={6}
      mb={6}
      borderRadius={5}
      border='0.5px solid'
      borderColor='gray.100'
    >
      <Flex direction='row' align='center' mb={6}>
        <Box mr={6}>{children}</Box>
        <Heading size='md'>{title}</Heading>
      </Flex>
      <Text lineHeight='1.6'>{description}</Text>
    </Flex>
  )
}

export default ServiceCard
