import Intro from '../../components/project/Intro'
import Purpose from '../../components/project/Purpose'
import dynamic from 'next/dynamic'
import Image from 'next/image'

import { Box, Flex } from '@chakra-ui/react'
import Banner from '../../components/Banner'
const DynamicNavbar = dynamic(() => import('../../components/Navbar'), {
    ssr: false,
})

const AssignmentPlanner = () => {
    const projectDescription = `Assignment Planner was created so I could visually plan when my university assignment were due. Before I created the application I was creating a word document. I built the app using React, Next JS and Context for state management. All the UI is custom styling and is saved to local storage or access at a later time.`

    const projectPurpose =
        'The purpose of the project was to get some more experience building apps in React and NextJS, and to also make the creation of my assignment planning timetables much quicker. Creating them in a word file would take me 10-15minutes. I can now create the same timetable in under 2 minutes. This was a fun little project for me and one that I am still using today'
    return (
        <div>
            <DynamicNavbar />
            <Box
                as='section'
                maxW='1000px'
                m='auto'
                p={{ base: '10', sm: '10', md: '5', lg: '0' }}
                my={{ base: '2', md: '16' }}>
                <Intro
                    title='Assignment Planner App'
                    description={projectDescription}
                    stackList={['React', 'Next JS', 'Context', 'Vercel']}
                    codeLink='https://github.com/tmoran18/assignment-planner'
                    siteLink='https://assignment-planner.vercel.app'
                />
                <Image
                    src={'/assignment-planner-main.jpg'}
                    width={1000}
                    height={1774}
                    alt='Assignment Planner Homepage'
                />
                <Purpose purpose={projectPurpose} />
                <Flex
                    sx={{ gap: '1.5rem' }}
                    justify='space-between'
                    my={16}
                    direction={{ base: 'column', md: 'row' }}
                    align={{ base: 'center', md: 'flex-start' }}>
                    <Box>
                        <Image
                            src={'/assignment-planner-main-2.jpg'}
                            width={450}
                            height={386}
                            alt='Assignment Planner Units Form'
                        />
                    </Box>
                    <Box pt={24}>
                        <Image
                            src={'/assignment-planner-main-3.jpg'}
                            width={450}
                            height={528}
                            alt='Assignment Planner assignment table'
                        />
                    </Box>
                </Flex>
            </Box>
            <Banner />
        </div>
    )
}

export default AssignmentPlanner
