import React from 'react'
import {Box, Flex, Heading, Text, Button, Image, Center, List, ListItem, ListIcon} from '@chakra-ui/react'
import {AiOutlineCheck} from 'react-icons/ai'
export const CleanEnergy = () => {
  return (
    <Box display="flex" rowGap="40px" flexDir={["column-reverse", "column-reverse", "column-reverse","row-reverse"]} px="5%" py="10%" justifyContent="space-between">
    <Box width={["100%","45%"]}>
        <Image src="/assets/images/gasImage2.png" alt=""/>
    </Box>
    <Box width={["100%","50%"]}>
        <Heading fontSize={["1.5rem","3rem"]} lineHeight={["1.8125rem","3.5187rem"]} mb="2.5rem" w="80%">
        Clean energy gas solutions for your home cooking
        </Heading>
        <Text fontSize={["1rem","1.125rem"]} lineHeight={["1.625rem","2.25rem"]} mb="2.5rem" color="#868686">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum viverra praesent arcu diam et interdum volutpat. Lacus, egestas purus etiam volutpat sagittis et neque diam. 
        </Text>
        <Text  fontSize={["1rem","1.125rem"]} lineHeight={["1.625rem","2.25rem"]} color="#868686">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum viverra praesent arcu diam et interdum volutpat. Lacus, egestas purus.
        </Text>
    </Box>
</Box>
  )
}
