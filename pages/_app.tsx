import React, { useRef } from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../theme';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { queryClient } from '../react-query/queryClient';

const App = ({ Component, pageProps }: AppProps) => {
  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }

  return (
    <>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Head>
              <meta charSet="utf-8" />
              <link rel="shortcut icon" href="/favicon.jpeg" />
              <title>시퀀스</title>
            </Head>
            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={false} />
          </Hydrate>
        </QueryClientProvider>
      </ChakraProvider>
    </>
  );
};

export default App;
