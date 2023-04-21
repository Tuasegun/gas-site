import React from 'react'
import {Box, Flex, Heading, Text, Button, Image, VStack} from '@chakra-ui/react'
export const Hero = () => {
  return (
    <Box bg="#FFFFFF">
        <Flex
        justifyContent={["flex-start","space-between"]}
        pl={["0%","0%","0%","5%"]}
        alignItems={["flex-start","center"]}
        flexDir={["column", "column", "column", "row"]}
        rowGap="2.625rem"
        >
        <Box  px={["5%","5%","5%","0%"]} width={["95%","95%","95%","40%"]}>
            <Heading
            fontSize={["2.5rem", "2.5rem", "2.5rem","4rem"]} fontWeight="700" lineHeight={["3rem", "3rem", "3rem", "4.875rem"]} color="#24093F"
            >
            Filling your home gas has never been  <Text as="span" color="brand.yellow">easier</Text>
            </Heading>
            <Text mt={["1.5rem","1.5rem","1.5rem","2.5rem"]} fontSize={["1rem","1.125rem"]} lineHeight={["1.625rem","2rem"]} color="#868686">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum viverra praesent.
            </Text>
            <Box mt={["1.5rem","1.5rem","1.5rem","2.5rem"]}>
                <Button background="#0E0E18">
                Book an Order
                </Button>
            </Box>
            <Box
        display={["none","none","none","flex"]}
        justifyContent="space-between"
        mt="4rem"
        >
        < VStack>
            <Heading fontSize="24px" textAlign="center" >
            2000+
            </Heading>
            <Text fontSize="1rem" lineHeight="1.75rem" color="#868686" textAlign="center" >
            Existing Customers 
            </Text>
        </ VStack>
        < VStack>
            <Heading  fontSize="24px" textAlign="center">
           54
            </Heading>
            <Text fontSize="1rem" lineHeight="1.75rem" color="#868686" textAlign="center">
            Trained Personells
            </Text>
        </ VStack>
        < VStack>
            <Heading  fontSize="24px" textAlign="center">
            4.3
            </Heading>
            <Text fontSize="1rem" lineHeight="1.75rem" color="#868686" textAlign="center"> 
            Customer Ratings
            </Text>
        </ VStack>
       
        </Box>
        </Box>
        <Box
        width={["100%", "100%", "100%", "50%"]}
        >
            <Image src="/assets/images/heroImageDesktop.png" alt=""/>
        </Box>
        <Box
        display={["flex","flex","flex","none"]}
        justifyContent="space-between"
        
        >
        < VStack>
            <Heading fontSize="24px" textAlign="center" >
            2000+
            </Heading>
            <Text fontSize="1rem" lineHeight="1.75rem" color="#868686" textAlign="center" >
            Existing Customers 
            </Text>
        </ VStack>
        < VStack>
            <Heading  fontSize="24px" textAlign="center">
           54
            </Heading>
            <Text fontSize="1rem" lineHeight="1.75rem" color="#868686" textAlign="center">
            Trained Personells
            </Text>
        </ VStack>
        < VStack>
            <Heading  fontSize="24px" textAlign="center">
            4.3
            </Heading>
            <Text fontSize="1rem" lineHeight="1.75rem" color="#868686" textAlign="center"> 
            Customer Ratings
            </Text>
        </ VStack>
       
        </Box>
        </Flex>
    </Box>
  )
}
