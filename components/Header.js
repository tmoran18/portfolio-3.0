import { Text, Heading, Flex } from '@chakra-ui/react'
import Button from './Button'

const Header = () => {
    return (
        <Flex
            direction='column'
            py={{ base: '3rem', md: '6rem', lg: '8rem' }}
            px={{ base: '2rem' }}
            align='center'
            justify='center'
            textAlign='center'>
            <Heading
                as='h1'
                fontSize={{ base: '3rem', md: '4rem', lg: '6rem' }}
                fontWeight={900}>
                Tim Moran
            </Heading>
            <Heading
                as='h2'
                fontSize={{ base: '2rem', md: '3rem', lg: '4rem' }}
                fontWeight={800}>
                Front End Developer
            </Heading>
            <Text
                color='gray.700'
                maxW='620px'
                py={12}
                pb={{ base: '6', md: '10' }}>
                Hi, I’m Tim. I am a Front End Developer living in Brisbane,
                Australia. I work with HTML, CSS, JavaScript, React & Next JS. I
                enjoy problem solving and UI/UX design.
            </Text>
            <Flex
                w={{ base: '18rem', sm: '28rem' }}
                flexDirection={{ base: 'column', sm: 'row' }}
                align={{ base: 'center' }}
                justify={{ base: 'space-between', sm: 'space-between' }}
                h='7rem'>
                <Button link='#work' bg='blue' color='white' shadowColor='blue'>
                    See My Work
                </Button>
                <Button
                    link='#services'
                    bg='white'
                    color='grey.600'
                    shadowColor='black'>
                    Services
                </Button>
            </Flex>
        </Flex>
    )
}

export default Header
