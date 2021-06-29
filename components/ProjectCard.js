import Image from 'next/image'
import {
  Flex,
  Heading,
  Text,
  Box,
  Button,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  useBreakpointValue,
} from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

import WebsiteBlack from './Icons/WebsiteBlack'
import CodeBlack from './Icons/CodeBlack'

const ProjectCard = ({ imgSrc, imgAlt, title, blurb, project }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Flex
      direction='column'
      boxShadow='lg'
      borderRadius='5px'
      overflow='hidden'
      maxW={80}
      cursor='pointer'
      _hover={{ boxShadow: '2xl' }}
    >
      <Box onClick={onOpen}>
        <Box borderBottom='1px solid' borderColor='gray.200' maxH='181px'>
          <Image src={imgSrc} width={320} height={180} alt={imgAlt} />
        </Box>
        <Flex p={5} direction='column' justify='space-around'>
          <Heading as='h6' fontWeight={600} size='md'>
            {title}
          </Heading>
          <Text mt={4}>{blurb}</Text>
        </Flex>
      </Box>
      <Flex fontWeight='600' px={5} pb={2}>
        {project.codeLink && (
          <Link
            pr={5}
            href={project.codeLink}
            _focus={{ outline: 'none' }}
            _hover={{ transform: 'scale(1.2)' }}
            isExternal
          >
            <CodeBlack />
          </Link>
        )}
        {project.siteLink && (
          <Link
            href={project.siteLink}
            _focus={{ outline: 'none' }}
            _hover={{ transform: 'scale(1.2)' }}
            isExternal
          >
            <WebsiteBlack />
          </Link>
        )}
      </Flex>
      <ProjectModal isOpen={isOpen} onClose={onClose} project={project} />
    </Flex>
  )
}

const ProjectModal = ({ isOpen, onClose, project }) => {
  const variant = useBreakpointValue({
    base: 'xs',
    sm: 'md',
    md: 'xl',
    lg: '4xl',
  })
  const modalScrollBehavior = useBreakpointValue({
    base: 'inside',
    sm: 'outside',
  })

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={variant}
      scrollBehavior={modalScrollBehavior}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{project.title}</ModalHeader>
        <ModalCloseButton />

        <Carousel infiniteLoop>
          {project.imageSlide.map((slide) => {
            return (
              <Image
                key={slide}
                src={slide}
                height={858}
                width={858}
                alt={slide}
              />
            )
          })}
        </Carousel>
        <ModalBody>{project.longDesc}</ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  )
}
export default ProjectCard
