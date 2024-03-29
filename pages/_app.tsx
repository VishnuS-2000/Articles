import '../styles/globals.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import type { AppProps } from 'next/app'
import {SessionProvider} from 'next-auth/react'
import { ChakraProvider } from '@chakra-ui/react'



function MyApp({ Component, pageProps:{
  session,...pageProps
} }: AppProps) {


  return  <ChakraProvider>
  <SessionProvider session={session} basePath="/jis/api/auth">
    <Component {...pageProps} />
  </SessionProvider> 
  </ChakraProvider>


}



export default MyApp
