import { Box, Container } from "@chakra-ui/react";
import { FC } from "react";

export const MainLayout:FC= ({children})=>{
    return (
        <>
            <Box>
                <Box>
                    Sample
                </Box>
                <Box>
                    <Container>
                        {children}
                    </Container>
                </Box>
            </Box>
        </>
    )
}