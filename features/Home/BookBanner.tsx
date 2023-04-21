import React from 'react'
import {Box, Flex, Heading, Text, Image, Center, Button} from '@chakra-ui/react'
export const BookBanner = () => {
  return (
    <Box
    py="10%"
    px="5%"

    >
        <Box
        bg="#753FF6"
        py={["4rem","5rem"]}
        px="5%"
        rounded="1.5rem"
        position="relative"
        zIndex="2"
        overflow="hidden"
        >
            <Box zIndex="-1" pos="absolute" left={["-30%","0"]} bottom="0">
                <Image src="/assets/icons/bookIconLeft.svg" alt=""/>
            </Box>
            <Box zIndex="-1" pos="absolute" right={["-30%","0"]} top={["-30%", "50%"]}>
                <Image  zIndex="-1" src="/assets/icons/bookIconRight.svg" alt=""/>
            </Box>
            <Box  zIndex="-1" pos="absolute" top={["0%","10%"]} left="15%">
                <Image src="/assets/icons/bookPortal.svg" alt=""/>
            </Box>
            <Center
            flexDir="column"
            zIndex="2"
            >
                <Heading
                fontSize={["1.5rem","3rem"]}
                lineHeight="56.3px"
                color="#FFF"
                textAlign="center"
                >
                Book your order today
                </Heading>
                <Text
                fontSize={["1rem","1.125rem"]}
                lineHeight="1.3206rem"
                color="#E5E5E5"
                fontWeight="500"
                width={["100%","60%"]}
                textAlign="center"
                mt="2rem"

                >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, bibendum viverra praesent arcu diam et interdum?
                </Text>
                <Button bg="brand.darkPurple.200" mt="3.1875rem">
                Book an Order
                </Button>
            </Center>
        </Box>
    </Box>
  )
}
