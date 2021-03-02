import { Box, Container} from "@chakra-ui/react";
import { FC } from "react";

export const MainLayout:FC= ({children})=>{
    return (
        <>
            <Box
               bg="#edf2f7"
            >
               
                <Box>
                    <Container
                        height="90vh"
                        p={3} 
                        maxW="container.lg"
                    >
                        <Box 
                            bgColor="white"
                            height="100%"
                        >
                            {children}
                        </Box>
                        
                    </Container>
                </Box>
            </Box>
        </>
    )
}