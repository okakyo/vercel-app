import '../styles/globals.css'
import {ChakraProvider,CSSReset} from "@chakra-ui/react";
import { MainLayout } from '@/components/organisms/layout/MainLayout';
import { TheHeader } from '@/components/organisms/header/TheHeader';
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <CSSReset/>
      <TheHeader/>
        <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
      
    </ChakraProvider>
    
  )
}

export default MyApp
