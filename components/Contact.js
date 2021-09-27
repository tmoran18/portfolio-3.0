import { useState } from 'react'
import {
  Box,
  Flex,
  Input,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Center,
  VStack,
  Textarea,
  Text,
} from '@chakra-ui/react'

const Contact = () => {
  return (
    <Box
      id='contact'
      maxW={{ base: '600px', lg: '1000px' }}
      margin='4rem auto'
      border={{ base: 'none', md: '1px solid #eee' }}
      borderRadius='4px'
      overflow='hidden'
      pb={{ base: 6, lg: 0 }}
      boxShadow='2xl'
    >
      <Heading
        display={{ base: 'block', lg: 'none' }}
        as='h3'
        size='xl'
        fontWeight={800}
        textAlign='center'
        mt={4}
      >
        Get In Touch
      </Heading>
      <Flex>
        <VStack
          as='form'
          minW={{ base: '98%', lg: '50%' }}
          p={{ base: 3, sm: 5, lg: 8 }}
          spacing={5}
          margin='auto'
          name='contact-form'
          method='POST'
          data-netlify='true'
          action='/success'
        >
          <Box fontSize='xs' textAlign='right' alignSelf='flex-end' pr={3}>
            <Text fontSize='md' as='span' color='red.400'>
              *{' '}
            </Text>
            <Text as='span'>Indicates Required Field</Text>
          </Box>
          <Text visibility='hidden' position='absolute'>
            <label>
              Don’t fill this out if you’re human: <input name='bot-field' />
            </label>
          </Text>
          <input type='hidden' name='form-name' value='contact-form' />
          <FormControl id='first-name' isRequired>
            <FormLabel>First name</FormLabel>
            <Input name='name' id='name' size='md' />
          </FormControl>
          <FormControl id='email' isRequired>
            <FormLabel>Email</FormLabel>
            <Input name='email' id='email' size='md' type='email' />
          </FormControl>
          <FormControl id='phone'>
            <FormLabel>Phone</FormLabel>
            <Input name='phone' id='phone' size='md' />
          </FormControl>
          <FormControl id='organisation'>
            <FormLabel>Organisation</FormLabel>
            <Input name='organisation' id='organisation' size='md' />
          </FormControl>
          <FormControl id='message' isRequired>
            <FormLabel>Message</FormLabel>
            <Textarea
              name='message'
              id='message'
              placeholder='Your message here...'
              mb={8}
            />
          </FormControl>
          <Button
            type='submit'
            w='full'
            bg='#0070F3'
            color='white'
            boxShadow='1px 7px 20px rgba(0, 112, 243, 0.5);'
            _hover={{ background: '#0070F3', transform: 'scale(1.03)' }}
          >
            Submit
          </Button>
        </VStack>
        <Center
          display={{ base: 'none', lg: 'flex' }}
          bg='black'
          color='white'
          minW='50%'
          p={10}
          textAlign='center'
          flexDirection='column'
        >
          <Heading as='h2' size='3xl'>
            Get In Touch
          </Heading>
          <Text mt={10}>
            Get in touch if you would like to talk about working together or
            just having a chat
          </Text>
          <Flex justify='space-around' w='30%' mt={16}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='0 0 32 32'
              fill='none'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M16 0C7.16463 0 0 7.34432 0 16.405C0 23.653 4.58448 29.8023 10.9418 31.9716C11.7414 32.1234 12.035 31.6156 12.035 31.1823C12.035 30.7914 12.0201 29.4989 12.0132 28.1281C7.56208 29.1205 6.62282 26.1925 6.62282 26.1925C5.89498 24.2966 4.84629 23.7921 4.84629 23.7921C3.39459 22.7739 4.95572 22.7949 4.95572 22.7949C6.56236 22.9105 7.40834 24.4856 7.40834 24.4856C8.83541 26.9933 11.1513 26.2683 12.0644 25.8491C12.2083 24.7891 12.6226 24.0651 13.0803 23.6554C9.52637 23.2409 5.79058 21.834 5.79058 15.548C5.79058 13.7572 6.41561 12.2937 7.43914 11.1449C7.273 10.7314 6.72534 9.06287 7.59438 6.80328C7.59438 6.80328 8.938 6.36257 11.9952 8.48509C13.2716 8.12162 14.6403 7.93927 16 7.93281C17.3597 7.93897 18.7296 8.12155 20.0082 8.48509C23.0621 6.36257 24.4038 6.80328 24.4038 6.80328C25.2747 9.06287 24.7271 10.7314 24.5609 11.1449C25.5869 12.2937 26.2073 13.7572 26.2073 15.548C26.2073 21.8492 22.4643 23.2363 18.9015 23.6424C19.4754 24.1515 19.9868 25.1499 19.9868 26.6804C19.9868 28.8754 19.9685 30.642 19.9685 31.1823C19.9685 31.6192 20.2562 32.1307 21.0673 31.9696C27.4214 29.798 32 23.6508 32 16.4051C32 7.34425 24.8365 0 16 0'
                fill='white'
              />
              <path
                d='M6.06014 23.5539C6.02484 23.6356 5.8998 23.6601 5.78594 23.6039C5.66952 23.5504 5.60471 23.4392 5.64226 23.3575C5.67681 23.2738 5.80178 23.2504 5.9179 23.3064C6.03393 23.3599 6.1001 23.4721 6.06014 23.5539ZM6.7083 24.2951C6.63199 24.3676 6.48253 24.3339 6.38159 24.2193C6.27667 24.105 6.25729 23.9517 6.33473 23.8784C6.41344 23.8059 6.55809 23.8398 6.66271 23.9542C6.76763 24.0699 6.78806 24.2218 6.7083 24.2951ZM7.3391 25.2398C7.24109 25.3099 7.08052 25.2444 6.98138 25.0986C6.88337 24.9524 6.88337 24.7775 6.98363 24.7074C7.08277 24.6373 7.24094 24.7004 7.34136 24.8451C7.43914 24.9934 7.43914 25.1683 7.3391 25.2398ZM8.20326 26.1527C8.11561 26.2518 7.92883 26.2253 7.79206 26.09C7.65222 25.9577 7.61331 25.7699 7.70096 25.6707C7.78996 25.5714 7.9778 25.5993 8.11554 25.7335C8.25448 25.8656 8.29654 26.0546 8.20326 26.1527ZM9.39563 26.6827C9.35657 26.8113 9.17707 26.8693 8.99577 26.8147C8.81476 26.7585 8.6964 26.6084 8.7329 26.4784C8.7706 26.3488 8.95131 26.2882 9.13381 26.3467C9.31451 26.4027 9.43325 26.5521 9.39563 26.6827V26.6827ZM10.7051 26.7809C10.7096 26.9162 10.5559 27.0284 10.3657 27.0308C10.1744 27.0354 10.0194 26.9257 10.0173 26.7926C10.0173 26.656 10.1678 26.5451 10.3588 26.5415C10.549 26.5377 10.7051 26.6467 10.7051 26.7809ZM11.9235 26.5684C11.9463 26.7001 11.8141 26.8357 11.6252 26.8718C11.4395 26.9068 11.2675 26.8251 11.2439 26.6945C11.2208 26.5592 11.3552 26.4236 11.5409 26.3886C11.7301 26.3549 11.8994 26.4342 11.9235 26.5684Z'
                fill='white'
              />
            </svg>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='32'
              height='32'
              viewBox='0 0 32 32'
              fill='none'
            >
              <path
                d='M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z'
                fill='white'
              />
              <path
                d='M26.2591 9.63553C25.5044 9.97042 24.6939 10.1968 23.8416 10.2986C24.7114 9.77771 25.3777 8.95234 25.6924 7.97001C24.8661 8.46076 23.9619 8.80624 23.0189 8.99146C22.2515 8.17348 21.1572 7.66278 19.9465 7.66278C17.6227 7.66278 15.738 9.54665 15.738 11.8718C15.738 12.2013 15.7751 12.5227 15.8465 12.8313C12.3483 12.6555 9.24687 10.9798 7.17094 8.43361C6.80846 9.05546 6.60097 9.77847 6.60097 10.5499C6.60097 12.01 7.34414 13.2983 8.47338 14.0529C7.80489 14.0322 7.15107 13.8517 6.56658 13.5267V13.5798C6.56658 15.6194 8.01723 17.32 9.94288 17.7068C9.58914 17.8037 9.21791 17.8543 8.83386 17.8543C8.56232 17.8543 8.29887 17.8286 8.04152 17.7802C8.57715 19.4519 10.1316 20.6687 11.973 20.7031C10.5324 21.8323 8.71726 22.5054 6.74582 22.5054C6.40626 22.5054 6.07066 22.4852 5.74121 22.4455C7.60422 23.6401 9.81624 24.3374 12.1933 24.3374C19.935 24.3374 24.169 17.9237 24.169 12.3617C24.169 12.1791 24.165 11.9979 24.1562 11.8173C24.9811 11.2206 25.6932 10.4818 26.2591 9.63553V9.63553Z'
                fill='#171717'
              />
            </svg>
          </Flex>
        </Center>
      </Flex>
    </Box>
  )
}

export default Contact
