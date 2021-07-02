import { Box, Stack, Text, ButtonGroup, IconButton } from '@chakra-ui/react'

import GithubLogoWhite from './Icons/GithubLogoWhite'
import TwitterLogoWhite from './Icons/TwitterLogoWhite'
import LogoWhite from './Icons/LogoWhite'

const Footer = () => {
  return (
    <Box
      as='footer'
      role='contentinfo'
      mx='auto'
      py='12'
      px={{
        base: '4',
        md: '8',
      }}
      bg='black'
    >
      <Stack maxW='1000px' mx='auto'>
        <Stack
          direction='row'
          spacing='4'
          align='center'
          justify='space-between'
        >
          <Logo />
          <SocialMediaLinks />
        </Stack>
        <Copyright
          alignSelf={{
            base: 'center',
            sm: 'start',
          }}
        />
      </Stack>
    </Box>
  )
}

const Copyright = () => (
  <Text fontSize='sm' color='white'>
    &copy; {new Date().getFullYear()} Tim Moran All rights reserved.
  </Text>
)

const Logo = (props) => {
  return <LogoWhite />
}

const SocialMediaLinks = (props) => (
  <ButtonGroup variant='ghost' color='gray.600' {...props}>
    <IconButton
      as='a'
      href='#'
      aria-label='LinkedIn'
      icon={<TwitterLogoWhite fontSize='20px' />}
    />
    <IconButton
      as='a'
      href='#'
      aria-label='GitHub'
      icon={<GithubLogoWhite fontSize='20px' />}
    />
    {/* <IconButton
      as='a'
      href='#'
      aria-label='Twitter'
      icon={<FaTwitter fontSize='20px' />}
    /> */}
  </ButtonGroup>
)

export default Footer
