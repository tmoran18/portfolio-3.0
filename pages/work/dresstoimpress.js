import Intro from '../../components/project/Intro'
import Purpose from '../../components/project/Purpose'
import dynamic from 'next/dynamic'
import Image from 'next/image'

import { Box, Flex } from '@chakra-ui/react'
import Banner from '../../components/Banner'
const DynamicNavbar = dynamic(() => import('../../components/Navbar'), {
  ssr: false,
})

const DressToImpress = () => {
  const projectDescription = `Dress to Impress needed a WordPress website that they could add products too themselves as the business grew. Having booking functionality for users to book a time for rental try on's was a crucial part of the build. The client supplied rough drawn wireframes which I converted into this stylish website.`

  const projectPurpose =
    'The purpose of the project was to provide the client with a stylish website where users could view all the available dresses for hire with sizing, costs and a description. Users can also make a booking to try a dress on using the integrated booking plugin. The main goals of the project were to take the new business from a facebook only page to a professional online presence and start ranking on SEO which has been achieved. The website has been very succesful with consistent bookings and page views consistently growing.'
  return (
    <div>
      <DynamicNavbar />
      <Box
        as='section'
        maxW='1000px'
        m='auto'
        p={{ base: '10', sm: '10', md: '5', lg: '0' }}
        my={{ base: '2', md: '16' }}
      >
        <Intro
          title='Dress to Impress Website'
          description={projectDescription}
          stackList={['WordPress', 'Divi', 'Custom Fields']}
          siteLink='https://dresstoimpressgc.com.au/'
        />
        <Image
          src={'/dresstoimpress-main.jpg'}
          width={1000}
          height={793}
          alt='Dress to Impress homepage'
        />
        <Purpose purpose={projectPurpose} />
        <Flex
          sx={{ gap: '1.5rem' }}
          justify='space-between'
          my={16}
          direction={{ base: 'column', md: 'row' }}
          align={{ base: 'center', md: 'flex-start' }}
        >
          <Box>
            <Image
              src={'/dresstoimpress-main-2.jpg'}
              width={450}
              height={769}
              alt='Dress to Impress hompeage Long view'
            />
          </Box>
          <Box pt={24}>
            <Image
              src={'/dresstoimpress-main-3.jpg'}
              width={450}
              height={479}
              alt='Dress to Impress product Page'
            />
          </Box>
        </Flex>
        <Image
          src={'/dresstoimpress-main-4.jpg'}
          width={1000}
          height={1096}
          alt='Dress to Impress Booking plugin'
        />
      </Box>
      <Banner />
    </div>
  )
}

export default DressToImpress
