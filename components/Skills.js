import { Box, HStack, Flex } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
const Skills = () => {
    const MotionBox = motion(HStack)
    return (
        <Flex position='relative' direction='column'>
            <Box
                bg='blue'
                h={32}
                display='flex'
                align='center'
                position='relative'
                overflow='hidden'>
                <AnimatePresence>
                    <MotionBox
                        w='200%'
                        position='absolute'
                        left={0}
                        top={6}
                        animate={{ left: ['0%', '-100%'] }}
                        transition={{
                            duration: 16,
                            ease: 'linear',
                            repeat: Infinity,
                        }}>
                        <Flex w='50%' justify='space-around'>
                            <Image
                                src='/js-logo.png'
                                width={80}
                                height={80}
                                alt='JavaScript Logo'
                            />
                            <Image
                                src='/html-css-logo.png'
                                width={80}
                                height={80}
                                alt='JavaScript Logo'
                            />
                            <Image
                                src='/react-logo.png'
                                width={80}
                                height={80}
                                alt='JavaScript Logo'
                            />
                            <Image
                                src='/photoshop-logo.png'
                                width={80}
                                height={80}
                                alt='JavaScript Logo'
                            />
                            <Image
                                src='/nextjs-logo.png'
                                width={80}
                                height={80}
                                alt='JavaScript Logo'
                            />
                            <Image
                                src='/figma-logo.png'
                                width={80}
                                height={80}
                                alt='JavaScript Logo'
                            />
                            <Image
                                src='/python-logo.png'
                                width={80}
                                height={80}
                                alt='JavaScript Logo'
                            />
                        </Flex>
                        <Flex w='50%' justify='space-around'>
                            <Image
                                src='/js-logo.png'
                                width={80}
                                height={80}
                                alt='JavaScript Logo'
                            />
                            <Image
                                src='/html-css-logo.png'
                                width={80}
                                height={80}
                                alt='JavaScript Logo'
                            />
                            <Image
                                src='/react-logo.png'
                                width={80}
                                height={80}
                                alt='JavaScript Logo'
                            />
                            <Image
                                src='/photoshop-logo.png'
                                width={80}
                                height={80}
                                alt='JavaScript Logo'
                            />
                            <Image
                                src='/nextjs-logo.png'
                                width={80}
                                height={80}
                                alt='JavaScript Logo'
                            />
                            <Image
                                src='/figma-logo.png'
                                width={80}
                                height={80}
                                alt='JavaScript Logo'
                            />
                            <Image
                                src='/python-logo.png'
                                width={80}
                                height={80}
                                alt='JavaScript Logo'
                            />
                        </Flex>
                    </MotionBox>
                </AnimatePresence>
            </Box>
            <Box
                shadow='xl'
                bg='white'
                position='absolute'
                bottom='-30px'
                alignSelf='center'
                size='lg'
                fontWeight='800'
                fontSize='xl'
                px={10}
                py={2}
                borderRadius='5px'
                border='0.5px solid'
                borderColor='gray.300'
                _hover={{ bg: 'white', cursor: 'default' }}>
                {' '}
                Some Technical Skills
            </Box>
        </Flex>
    )
}

export default Skills

// animate={{x: '100%'}}
// transition={{duration: 10, ease: 'linear', loop: Inifinity}}
