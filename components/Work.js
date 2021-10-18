import { Flex, Heading, Grid, Box, Text } from '@chakra-ui/layout'
import Image from 'next/image'
import Link from 'next/link'
const Work = () => {
  return (
    <Flex
      id='work'
      direction='column'
      align='center'
      py={{ base: '3rem', md: '6rem', lg: '8rem' }}
      px={{ base: '2rem' }}
    >
      <Heading as='h4' size='xl' fontWeight={700} mb={10}>
        Work
      </Heading>
      <Grid
        maxW='1000px'
        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
        gap={10}
      >
        <Link href='/work/meal-planner'>
          <a>
            <Image
              src={'/meal-planner-card.jpg'}
              width={540}
              height={300}
              alt='Meal Planner Card'
            />
            <Heading as='h2' size='lg' mt={4}>
              Meal Planner
            </Heading>
            <Text mt={4}>
              A meal planning app built using NextJS, ChakraUI and Supbase for
              the backend.
            </Text>
          </a>
        </Link>
        <Link href='/work/dresstoimpress'>
          <a>
            <Image
              src={'/dresstoimpress-card.jpg'}
              width={540}
              height={300}
              alt='Dress to impress Card'
            />
            <Heading as='h2' size='lg' mt={4}>
              Dress to Impress
            </Heading>
            <Text mt={4}>
              A custom WordPress client site for hiring formal Dresses built
              using Divi.
            </Text>
          </a>
        </Link>
        <Link href='/work/assignment-planner'>
          <a>
            <Image
              src={'/assignment-planner-card.jpg'}
              width={540}
              height={300}
              alt='Assignment Planner Card'
            />
            <Heading as='h2' size='lg' mt={4}>
              Assignment Planner
            </Heading>
            <Text mt={4}>
              A React application for planning University assignments using
              NextJS
            </Text>
          </a>
        </Link>
      </Grid>
    </Flex>
  )
}

const projects = [
  {
    title: 'Dress to Impress Website',
    imgSrc: '/dresstoimpress_card.jpg',
    imgAlt: 'An image of a dress website',
    blurb: 'Client WordPress Dress Booking Website',
    longDesc:
      'Dress to Impress needed a WordPress website that they could add products too themselves as the business grew. Having booking functionality for users to book a time to try on dresses was a crucial part of the build. The client supplied rough drawn wireframes which I converted into this stylish website.',
    siteLink: 'https://dresstoimpressgc.com.au/',
    codeLink: '',
    imageSlide: [
      '/slide_1_1.jpg',
      '/slide_1_2.jpg',
      '/slide_1_3.jpg',
      '/slide_1_4.jpg',
    ],
  },
]

export default Work
