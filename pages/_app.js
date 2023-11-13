import { ChakraProvider } from '@chakra-ui/react'
import '../styles/root/_global.scss'
import { InterviewProvider } from '@/context/interviewContext';

function MyApp({ Component, pageProps, user }) {
  return (
    <InterviewProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </InterviewProvider>
  )
}

export default MyApp;
