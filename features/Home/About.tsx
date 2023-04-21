import React from 'react'
import {Box, Flex, Heading, Text, Button, Image, Center, List, ListItem, ListIcon} from '@chakra-ui/react'
import {AiOutlineCheck} from 'react-icons/ai'
export const About = () => {
  return (
    <Box display="flex" px="5%" py="10%" justifyContent="space-between" rowGap="2.5rem" flexDir={["column-reverse","column-reverse","column-reverse","row" ]}>
        <Box width={["100%","45%"]}>
            <Image src="/assets/images/gasImage1.png" alt=""/>
        </Box>
        <Box width={["100%","50%"]}>
            <Heading fontSize={["1.5rem","3rem"]} lineHeight={["1.8125rem","3.5187rem"]} mb="2.5rem">
            We can detect your gas before exhaustion!
            </Heading>
            <Text  fontSize={["1rem","1.125rem"]} lineHeight={["1.625rem","2.25rem"]} mb="2.5rem" color="#868686">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum viverra praesent arcu diam et interdum volutpat. Lacus, egestas purus etiam volutpat sagittis et neque diam. 
            </Text>
            <List gap=".5rem" >
                <ListItem  fontSize={["1rem","1.125rem"]} lineHeight={["1.625rem","2.25rem"]} color="#868686">
                    <ListIcon as={AiOutlineCheck}  rounded="50%" fontSize={"1.3rem"} padding=".2rem" bg="#CFE7FC" color="#0F408C"  />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit bibendum viverra.
                </ListItem>
                <ListItem fontSize="1.125rem" lineHeight="2.25rem" color="#868686">
                    <ListIcon as={AiOutlineCheck} bg="#CFE7FC" color="#0F408C" rounded="50%" fontSize={"1.3rem"} padding=".2rem"  />
                    Praesent arcu diam et interdum volutpat.
                </ListItem>
                <ListItem fontSize="1.125rem" lineHeight="2.25rem" color="#868686">
                    <ListIcon as={AiOutlineCheck} bg="#CFE7FC" color="#0F408C" rounded="50%" fontSize={"1.3rem"} padding=".2rem" />
                    Lacus, egestas purus etiam volutpat sagittis et neque diam.
                </ListItem>
            </List>
        </Box>
    </Box>
  )
}
