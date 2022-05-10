import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { Box, Text, Select } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {

  const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }
  const theme = extendTheme({
    fonts: {
      body: "Prompt",
    },
    config
  });  

  return (
    <ChakraProvider theme={theme}>
      <Box width="100%" display='flex' backgroundColor='#FABEA7' h={'100%'}>
        <Component {...pageProps} h={'100%'}/>
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
