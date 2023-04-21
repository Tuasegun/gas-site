import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Center,
    Heading, Text,
} from '@chakra-ui/react'
export const Faq = () => {
  return (
    <Box
    py="10%"
    px={["5%","15%"]}

    >
        <Box
        p="5%"
        background="linear-gradient(131.89deg, #F7F9FC 52.83%, #F3F4F9 53.9%)"
        rounded="2.5rem"
        >
            <Center
            flexDir="column"
            >
                <Heading display={['none', 'none', 'none', 'block']} fontSize={["24px","2.5rem"]} mb="40px">
                Frequently asked questions
                </Heading>
                <Heading display={['block', 'block', 'block', 'none']} textAlign="center" fontSize={["24px","2.5rem"]} mb="40px">
                FAQs
                </Heading>
                <Text 
                fontSize={["1rem", "1.125rem"]}
                lineHeight={["1.625rem","1.3206rem"]}
                color="#868686"
                textAlign="center"
                width={["100%","70%"]}
                
                >
                We know you may still have some questions, so here are some quick answers to clear your doubts.
                </Text>
            </Center>

            <Box
            mt={["1.5rem","5.875rem"]}
            >
                <Accordion>
                    <AccordionItem mb="1rem" border="0">
                        <AccordionButton bg="#FFFFFF" padding="1.5rem 1.5rem" justifyContent="space-between" rounded="1rem" >
                            <Text textAlign="left">
                            How much does it cost to fill a gas cylinder at home?
                            </Text>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                        Answer: The cost of filling a gas cylinder at home depends on the size of the cylinder and the price of propane or butane gas. You can compare prices and find the best deals.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem mb="1rem" border="0">
                    <AccordionButton bg="#FFFFFF" padding="1.5rem 1.5rem" justifyContent="space-between" rounded="1rem" border="0">
                            <Text textAlign="left">
                            How much does it cost to fill a gas cylinder at home?
                            </Text>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                        Answer: The cost of filling a gas cylinder at home depends on the size of the cylinder and the price of propane or butane gas. You can compare prices and find the best deals.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem mb="1rem" border="0">
                    <AccordionButton bg="#FFFFFF" padding="1.5rem 1.5rem" justifyContent="space-between" rounded="1rem">
                            <Text textAlign="left">
                            How much does it cost to fill a gas cylinder at home?
                            </Text>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                        Answer: The cost of filling a gas cylinder at home depends on the size of the cylinder and the price of propane or butane gas. You can compare prices and find the best deals.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>
        </Box>
    </Box>
  )
}
