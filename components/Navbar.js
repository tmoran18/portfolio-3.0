import {
  Box,
  Flex,
  HStack,
  Link,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useBreakpointValue,
  useMediaQuery,
  useDisclosure,
} from '@chakra-ui/react'

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import LogoWhite from './Icons/LogoWhite'
import GitHubLogoWhite from './Icons/GitHubLogoWhite'
import TwitterLogoWhite from './Icons/TwitterLogoWhite'

const Navbar = () => {
  const [isMobile] = useMediaQuery('(max-width: 600px)')

  return <Box>{isMobile ? <MobileNav /> : <DesktopNav />}</Box>
}

const DesktopNav = () => {
  return (
    <Box color='white' bg='#171717' h={16}>
      <Flex
        maxW='1000px'
        m='auto'
        alignItems='center'
        h='100%'
        justify='space-between'
      >
        <HStack spacing={10}>
          <LogoWhite />
          <HStack align='center' spacing={8} justify='center'>
            {NavLinks.map((navLink) => (
              <Box key={navLink.label}>
                <Link>{navLink.label}</Link>
                {navLink.children}
              </Box>
            ))}
          </HStack>
        </HStack>
        <HStack spacing={6}>
          <Link href='https://github.com/tmoran18' isExternal>
            <GitHubLogoWhite />
          </Link>
          <Link href='https://twitter.com/Tim__Moran' isExternal>
            <TwitterLogoWhite />
          </Link>
        </HStack>
      </Flex>
    </Box>
  )
}

const MobileNav = () => {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <Flex
      color='white'
      bg='#171717'
      justify='space-between'
      align='center'
      px={8}
      h={16}
    >
      <LogoWhite></LogoWhite>
      <IconButton
        bg='#171717'
        variant='unstyled'
        _focus={{ outline: 'none' }}
        onClick={onToggle}
        icon={
          isOpen ? (
            <CloseIcon color='white' w={6} h={6} />
          ) : (
            <HamburgerIcon color='white' w={8} h={8} />
          )
        }
      ></IconButton>
    </Flex>
  )
}

const NavLinks = [
  {
    label: 'Home',
    href: '#home',
  },
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Services',
    href: '#services',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
]

export default Navbar
