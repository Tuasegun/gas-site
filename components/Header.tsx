import React from 'react'
import {Box, Flex, Heading, Text, Button, Image, Center} from '@chakra-ui/react'
import {GiHamburgerMenu} from 'react-icons/gi'
const Header = () => {
  return (
    <Box
    px="5%"
    py="1.5rem"
    bg="rgba(255, 255, 255, 0.1)"
    backdropFilter="blur(15px)"
    position="fixed"
    top="0"
    w="100%"
    zIndex="100"
    >
        <Flex
        columnGap="3.5rem"
        w="100%"
        justifyContent={['space-between', 'space-between', 'space-between', 'flex-start']}
        alignItems="center"
        >
            <Box>
                <Image src="/assets/icons/homefillGas.svg" alt=""/>
            </Box>
            <Flex display={['none', 'none', 'none', 'flex']}  columnGap="3.5rem">
           <Text cursor="pointer" fontWeight="500">
            How It Works
           </Text>
           <Text cursor="pointer" fontWeight="500">
            Pricing
           </Text>
           <Text cursor="pointer" fontWeight="500">
           FAQs
           </Text>
           </Flex>
        
        <Flex display={['flex', 'flex', 'flex', 'none']}  columnGap="3.5rem">
              <Text cursor="pointer" fontSize="2rem" fontWeight="500">
                <GiHamburgerMenu/>
                </Text>
        </Flex>
        </Flex>
    </Box>
  )
}

export default Header