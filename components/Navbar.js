import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useMediaQuery,
  useDisclosure,
} from '@chakra-ui/react'

import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import LogoWhite from './Icons/LogoWhite'
import GitHubLogoWhite from './Icons/GithubLogoWhite'
import TwitterLogoWhite from './Icons/TwitterLogoWhite'
import MobileMenu from './MobileMenu'

const Navbar = () => {
  const [isMobile] = useMediaQuery('(max-width: 684px)')

  return <Box>{isMobile ? <MobileNav /> : <DesktopNav />}</Box>
}

const DesktopNav = () => {
  return (
    <Box color='white' bg='#171717' h={16} p={5}>
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
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure()
  return (
    <Box>
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
          icon={<HamburgerIcon color='white' w={8} h={8} />}
        ></IconButton>
      </Flex>
      <MobileMenu isOpen={isOpen} onClose={onClose} />
    </Box>
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
