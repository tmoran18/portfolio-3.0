import { Box, Flex, Heading } from '@chakra-ui/react'
import ProjectCard from './ProjectCard'
const Work = () => {
  return (
    <Flex
      id='work'
      direction='column'
      align='center'
      py={{ base: '3rem', md: '6rem', lg: '8rem' }}
      px={{ base: '2rem' }}
    >
      <Heading as='h4' size='xl' fontWeight={700}>
        Work
      </Heading>
      <Flex maxW='1000px'>
        <ProjectCard
          imgSrc={projects[0].imgSrc}
          imgAlt={projects[0].imgAlt}
          title={projects[0].title}
          blurb={projects[0].blurb}
          project={projects[0]}
        />
      </Flex>
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
