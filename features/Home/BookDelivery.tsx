import React from 'react'

import {Box, Heading, Text, Input,  Center, FormLabel, FormControl, Select, Button} from '@chakra-ui/react' 
export const BookDelivery = () => {
  return (
    <Box px={["5%","20%"]}py="10%">
       <Center pb="80px">
        <Heading fontSize={["1.5rem","3rem"]}>
        Book your home gas delivery
        </Heading>
        </Center> 

        <Box
        display="flex"
        flexDir="column"
        rowGap="1rem"
        >
            <FormControl>
                <FormLabel fontWeight="600" fontSize={["1rem", "1.125rem"]}>
                    FullName
                </FormLabel>
                <Input placeholder="Enter your Name" border="1px solid #E5E5E5" background="#FFFFFF"/>
            </FormControl>
            <FormControl>
                <FormLabel  fontWeight="600" fontSize={["1rem", "1.125rem"]}>
                Email address
                </FormLabel>
                <Input placeholder="example@gmail.com" border="  1px solid #E5E5E5" background="#FFFFFF"/>
            </FormControl>
            <FormControl >
                <FormLabel  fontWeight="600" fontSize={["1rem", "1.125rem"]}>
                    Phone Number
                </FormLabel>
                <Input placeholder="+234" border="  1px solid #E5E5E5" background="#FFFFFF"/>
            </FormControl>
            <FormControl >
                <FormLabel  fontWeight="600" fontSize={["1rem", "1.125rem"]}>
                   Home Address
                </FormLabel>
                <Input placeholder="We deliver at the comfort of your home" border="  1px solid #E5E5E5" background="#FFFFFF"/>
            </FormControl>
            <FormControl >
                <FormLabel fontSize={["1rem", "1.125rem"]}>
                   Home Address
                </FormLabel>
                <Input placeholder="We deliver at the comfort of your home" border="  1px solid #E5E5E5" background="#FFFFFF"/>
            </FormControl>
            <Box>
            <FormControl>
                <FormLabel  fontWeight="600" fontSize={["1rem", "1.125rem"]}>
                  Gas Weight
                </FormLabel>
                <Select placeholder="Select Gas Weight" border="  1px solid #E5E5E5" background="#FFFFFF">
                <option>12.5kg</option>
                </Select>
            </FormControl>
            </Box>
            <FormControl>
                <Center>
                    <Button bg="#0E0E18" >
                        Book an Order
                    </Button>
                </Center>
            </FormControl>
        </Box>
    </Box>
  )
}
