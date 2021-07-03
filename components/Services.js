import { Heading, Flex, Box, Spacer } from '@chakra-ui/layout'
import DesignIcon from './Icons/DesignIcon'
import MagnifyingIcon from './Icons/MagnifyingIcon'
import ReactIcon from './Icons/ReactIcon'
import UXDesignIcon from './Icons/UXDesignIcon'
import ResponsiveIcon from './Icons/ResponsiveIcon'
import PlatformIcon from './Icons/PlatformIcon'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <Box
      id='services'
      bg='gray.50'
      borderTop='1px solid'
      borderBottom='1px solid'
      borderColor='gray.200'
      boxShadow='inset 0px 0px 70px rgba(0, 0, 0, 0.10)'
    >
      <Flex
        id='work'
        direction='column'
        align='center'
        py={{ base: '3rem', md: '6rem', lg: '8rem' }}
        maxW='1000px'
        m='auto'
      >
        <Heading as='h4' size='xl' fontWeight={700} textAlign='center' mb={10}>
          Services
        </Heading>
        <Flex
          justify='space-between'
          align={{ base: 'center' }}
          w='100%'
          direction={{ base: 'column', lg: 'row' }}
          wrap='wrap'
        >
          {services.map((service) => {
            return (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
              >
                {service.iconComponent}
              </ServiceCard>
            )
          })}
        </Flex>
      </Flex>
    </Box>
  )
}

const services = [
  {
    title: 'Website Review',
    description:
      'Making sure your website is performing its best. Review, suggest and improve performance, speed and user experience.',
    iconComponent: <MagnifyingIcon />,
  },
  {
    title: 'Website Design',
    description:
      'Professional design and mockup your website to review before implementing. Pixel perfect implemention and delivery.',
    iconComponent: <DesignIcon />,
  },
  {
    title: 'Single Page Apps',
    description:
      'Create optimised single page apps using React. Experienced in frameworks and UI libraries such as Next JS and Chakra UI.',
    iconComponent: <ReactIcon />,
  },
  {
    title: 'UI/UX Design',
    description:
      'Proficient in using design tools such as Figma and Photoshop to craft thoughtful and beautiful website and app designs',
    iconComponent: <UXDesignIcon />,
  },
  {
    title: 'Responsive Design',
    description:
      'More than 50% of web traffic comes via mobile phones, responsive web design is important in todays development process',
    iconComponent: <ResponsiveIcon />,
  },
  {
    title: 'Platform Support',
    description:
      'Experienced in leveraging CMS platforms such as WordPress and GraphCMS to provide all your content and web data requirements ',
    iconComponent: <PlatformIcon />,
  },
]

export default Services
