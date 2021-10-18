import { Box, Heading, Text } from '@chakra-ui/layout'
const Purpose = ({ purpose }) => {
  return (
    <Box pt='16' textAlign='center'>
      <Heading as='h2' pb='16'>
        Purpose and Goals
      </Heading>
      <Text lineHeight={2} px={{ base: 6, md: 20 }}>
        {purpose}
      </Text>
    </Box>
  )
}

export default Purpose
