import React from 'react'
import {
  Box,
  Flex,
  Heading,
  Link,
  Text,
  VStack,
  HStack,
} from '@chakra-ui/layout'

const Intro = ({ title, description, stackList, siteLink, codeLink }) => {
  return (
    <Box pb='16'>
      <Heading as='h2' pb='16'>
        {title}
      </Heading>
      <Text lineHeight='2' maxW='800px' mb='16'>
        {description}
      </Text>
      <HStack align='start' spacing={{ base: '12', md: '32' }}>
        <VStack align='start'>
          <Text fontWeight='700'>STACK</Text>
          {stackList.map((item) => (
            <Text key={item}>{item}</Text>
          ))}
        </VStack>
        {siteLink && (
          <VStack align='start'>
            <Text fontWeight='700'>LIVE</Text>
            <Link color='blue' fontWeight='600' href={siteLink} isExternal>
              View Site
            </Link>
          </VStack>
        )}
        {codeLink && (
          <VStack align='start'>
            <Text fontWeight='700'>CODE</Text>
            <Link color='blue' fontWeight='600' href={codeLink} isExternal>
              Repository
            </Link>
          </VStack>
        )}
      </HStack>
    </Box>
  )
}

export default Intro
