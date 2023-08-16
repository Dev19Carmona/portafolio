import { StructureLayout } from "@/layout/StructureLayout";
import "@/styles/global.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ config })

export default function App({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <StructureLayout>
          <Component {...pageProps} />
        </StructureLayout>
      </ChakraProvider>
    </>
  );
}
