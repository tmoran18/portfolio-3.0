import Intro from '../../components/project/Intro'
import Purpose from '../../components/project/Purpose'
import dynamic from 'next/dynamic'
import Image from 'next/image'

import { Box, Flex } from '@chakra-ui/react'
import Banner from '../../components/Banner'
const DynamicNavbar = dynamic(() => import('../../components/Navbar'), {
  ssr: false,
})

const MealPlanner = () => {
  const projectDescription =
    'Meal Planner is a project I built using NextJS and ChakraUI for the frontend and Supabase for the backend. Meal Planner helps to quickly generate a shopping list for selected meals in seconds. Each meal also has recipe steps you can also view rather than having to try use paper meal cards or search for your favourite meal recipes online.'

  const projectPurpose =
    'The purpose of the project was to build a simple, functional and beautiful application that me and family could use to quickly plan our meals for the week and generate a shopping list from those meals. The application also serves as a store for my recipe steps. Furthermore, my goal was to build a project using the Supabase Postgres database with their great APIs and authentication features.'
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
          title='Meal Planner App'
          description={projectDescription}
          stackList={['React', 'NextJS', 'ChakraUI', 'Supabase']}
          codeLink='https://github.com/tmoran18/meal-planner-2.0'
          siteLink='https://meal-planner-2.vercel.app/'
        />
        <Image
          src={'/meal-planner-main.jpg'}
          width={1000}
          height={1227}
          alt='Meal Planner Landing Page'
        />
        <Purpose purpose={projectPurpose} />
        <Flex
          sx={{ gap: '1.5rem' }}
          justify='space-between'
          mt={16}
          direction={{ base: 'column', md: 'row' }}
          align={{ base: 'center', md: 'flex-start' }}
        >
          <Box>
            <Image
              src={'/meal-planner-main-2.jpg'}
              width={450}
              height={524}
              alt='Meal Planner Modal shopping list'
            />
          </Box>
          <Box pt={24}>
            <Image
              src={'/meal-planner-main-3.jpg'}
              width={452}
              height={729}
              alt='Meal Planner create ingredients and recipe pages'
            />
          </Box>
        </Flex>
      </Box>
      <Banner />
    </div>
  )
}

export default MealPlanner
