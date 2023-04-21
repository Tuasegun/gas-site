import React from 'react'
import {Box, Flex, Heading, Text, Button, Image, Center} from '@chakra-ui/react'
import {HowCard} from './HowCard'
export const HowItWorks = () => {
  return (
    <Box
    py="10%"
    px="10%"
    >
        <Center
        flexDir="column"
        >
            <Heading
            fontSize={["1.5rem"]}
            lineHeight="1.75rem"
            >
                How It Works
            </Heading>
            <Text
            color="#868686"
            fontSize={["1rem","1.125rem"]}
            lineHeight={["1.62rem","2.25rem"]}
            mt="1rem"
            textAlign="center"
            >
            The mechanism behind our operation and deliverables
            </Text>
        </Center>

        <Flex
        flexDir={['column', 'column', 'row', 'row']}
        justifyContent="space-between"
        mt="4rem"
        alignItems={['center', 'center', 'center', 'flex-start']}
        rowGap="2rem"
        >
            <HowCard title={"Place your order"} text="Lorem ipsum dolor sit amet, consect etur adipiscing elit." imageSrc='/assets/icons/tvHow.svg'  />
            {/* dotted verticalLines */}
            <Box 
            display={['block', 'block', 'block', 'block']}
            border="1.5px dashed #713DEE"
            height={["6rem","100%"]}
            width={["0.5px", "30%"]}
            mt={["0rem", "0rem", "2rem"]}
            />
            <HowCard title="Receive a call from us" text="Lorem ipsum dolor sit amet, consect etur adipiscing elit." imageSrc='/assets/icons/phoneHow.svg' />
            <Box 
              display={['block', 'block', 'block', 'block']}
            border="1.5px dashed #713DEE"
            height={["6rem","100%"]}
            width={["0.5px", "30%"]}
            mt={["0rem", "0rem", "2rem"]}
            />
            <HowCard title="Get your gas filled at home" text="Lorem ipsum dolor sit amet, consect etur adipiscing elit." imageSrc='/assets/icons/homeHow.svg' />
        </Flex>
    </Box>
  )
}
