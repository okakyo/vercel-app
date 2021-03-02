import '../styles/globals.css'
import {ChakraProvider,CSSReset} from "@chakra-ui/react";
import { MainLayout } from '@/components/organisms/layout/MainLayout';
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <CSSReset/>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
      
    </ChakraProvider>
    
  )
}

export default MyApp
