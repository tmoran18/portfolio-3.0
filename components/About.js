import {
  Flex,
  Box,
  Link,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import Button from './Button'

const About = () => {
  return (
    <Box
      id='about'
      bg='gray.50'
      borderTop='1px solid'
      borderBottom='1px solid'
      borderColor='gray.200'
      boxShadow='inset 0px 0px 70px rgba(0, 0, 0, 0.10)'
      py={{ base: '3rem', md: '6rem', lg: '8rem' }}
      px={{ base: '2rem' }}
    >
      <Flex
        direction='column'
        align='center'
        maxW='1000px'
        m='auto'
        textAlign='center'
      >
        <Heading as='h4' size='xl' fontWeight={700}>
          Frequently Asked Questions
        </Heading>
        <Accordion
          allowMultiple
          defaultIndex={[0]}
          maxW='44rem'
          w='100%'
          textAlign='left'
          my={10}
        >
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left' fontWeight={600}>
                  How long have I been programming for?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              I have been a developer for 3 years and employed as a developer
              for 2 years. I am currently the lead developer at{' '}
              <Link
                textDecor='underline'
                href='https://conversify.com.au'
                color='blue'
                isExternal
              >
                Conversify
              </Link>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left' fontWeight={600}>
                  What programming languages and web technologies do I use?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              I am experienced in HTML, CSS and JavaScript. I enjoy using React
              and the Next JS framework. Backend languages I have used Node JS
              and Python. Design tools I am profecient in using both Figma and
              Photoshop to develop UI&apos;s.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left' fontWeight={600}>
                  How well do I work in teams?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              I really enjoy collaborating and solving problems with team
              members and clients. Being able to bounce ideas and communicate
              with all stakeholders is very important to me.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left' fontWeight={600}>
                  What programming languages and web technologies do I use?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              I am experienced in HTML, CSS and JavaScript. I enjoy using React
              and the Next JS framework. Backend languages I have used Node JS
              and Python. Design tools I am profecient in using both Figma and
              Photoshop to develop UI&apos;s.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left' fontWeight={600}>
                  What programming languages and web technologies do I use?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              I am experienced in HTML, CSS and JavaScript. I enjoy using React
              and the Next JS framework. Backend languages I have used Node JS
              and Python. Design tools I am profecient in using both Figma and
              Photoshop to develop UI&apos;s.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left' fontWeight={600}>
                  What programming languages and web technologies do I use?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              I am experienced in HTML, CSS and JavaScript. I enjoy using React
              and the Next JS framework. Backend languages I have used Node JS
              and Python. Design tools I am profecient in using both Figma and
              Photoshop to develop UI&apos;s.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Heading as='h5' size='md' mb={10}>
          Want to know more or work together?
        </Heading>
        <Button link='#contact' color='white' bg='blue' shadowColor='blue'>
          Get in Touch
        </Button>
      </Flex>
    </Box>
  )
}

export default About
