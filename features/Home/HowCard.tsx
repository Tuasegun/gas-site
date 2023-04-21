import React from 'react'
import {Box, Flex, Heading, Text, Button, Image, Center} from '@chakra-ui/react'

interface HowCardProps {
    imageSrc: string
    title: string
    text: string
}

export const HowCard = ({imageSrc, title, text}: HowCardProps) => {
  return (
    <Box>
        <Flex flexDirection="column" alignItems="center">
            <Box>
                <Image src={imageSrc} alt={title} />
            </Box>
            <Box mt="2.5rem">
                <Heading fontSize="1.5rem" textAlign="center">
                    {title}
                </Heading>
            </Box>
            <Box mt="2.5rem">
                <Text
                 color="#868686"
                 fontSize="1.125rem"
                 lineHeight="1.3125rem"
                 textAlign="center"

                >
                    {text}
                </Text>
            </Box>
        </Flex>
    </Box>
  )
}
