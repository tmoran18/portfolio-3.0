import { Button as ChakraButton } from '@chakra-ui/react'
import NextLink from 'next/link'

const Button = ({ bg, color, link, children, shadowColor }) => {
  {
    console.log(shadowColor)
  }
  return (
    <NextLink href={link}>
      <ChakraButton
        minW='13rem'
        minH='2.8rem'
        mt={6}
        textAlign='center'
        bg={bg}
        color={color}
        boxShadow={shadowColor && `1px 7px 20px ${shadowColor}`}
        _focus={{ outline: 'none' }}
        _hover={{ bg: bg, transform: 'scale(1.1)' }}
      >
        {children}
      </ChakraButton>
    </NextLink>
  )
}

export default Button
