import { Button as ChakraButton } from '@chakra-ui/react'
import NextLink from 'next/link'

const Button = ({ bg, color, link, children, shadowColor }) => {
  const getShadowColor = (shadowColor) => {
    if (shadowColor === 'blue') {
      return 'rgba(0, 112, 243, 0.5)'
    } else if (shadowColor === 'black') {
      return 'rgba(0, 0, 0, 0.20)'
    } else {
      return
    }
  }
  return (
    <NextLink href={link}>
      <ChakraButton
        minW='13rem'
        minH='2.8rem'
        textAlign='center'
        bg={bg}
        color={color}
        boxShadow={`1px 7px 20px ${getShadowColor(shadowColor)}`}
        _focus={{ outline: 'none' }}
        _hover={{ bg: bg, transform: 'scale(1.1)' }}
      >
        {children}
      </ChakraButton>
    </NextLink>
  )
}

export default Button
