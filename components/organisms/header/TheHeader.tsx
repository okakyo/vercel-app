import { Box, Container, Flex, Heading, Spacer } from "@chakra-ui/react"
import { FC } from "react"
import NextLink from "next/link"
export const TheHeader:FC = ()=>{
    return (
        <>
            <Flex
                as="nav" 
                align="center"
                justify="space-between"
                padding="0.5rem"
                bg="teal.500"
                color="white"
            >
                <Box  p={2} >
                  <Heading size="md">
                      <NextLink href="/">
                          Title
                      </NextLink>
                  </Heading>
                </Box>
                <Spacer/>
                <Box p={2}>
                    <NextLink href="#">
                        Login
                    </NextLink>
                </Box>
            </Flex>
        </>
    )
}