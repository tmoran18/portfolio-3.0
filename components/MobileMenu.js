import { useRef, useState } from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  Button,
  Link,
  Input,
  VStack,
} from '@chakra-ui/react'

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement='left'
      onClose={onClose}
      finalFocusRef={'homelink'}
      size='full'
    >
      <DrawerOverlay />
      <DrawerContent bg='black'>
        <DrawerCloseButton color='white' _focus={{ outline: 'none' }} />

        <DrawerBody mt={10}>
          <VStack color='white' fontSize='3xl' spacing={10}>
            <Link onClick={onClose} href='#home'>
              Home
            </Link>
            <Link onClick={onClose} href='#about'>
              About
            </Link>
            <Link onClick={onClose} href='#work'>
              Work
            </Link>
            <Link onClick={onClose} href='#contact'>
              Contact
            </Link>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default MobileMenu
