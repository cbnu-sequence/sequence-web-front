import React, { useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../theme';
import { QueryClient, QueryClientProvider, Hydrate } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { queryClient } from '../react-query/queryClient';
import Footer from '../components/Footer';
import Header from '../components/Header';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import BodyWrapper from '../styles/BodyWrapper';
import BodyContent from '../styles/BodyContent';
import PomoBody from '../styles/PomoDoroBody';

const App = ({ Component, pageProps }: AppProps) => {
  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  switch (pageProps.layout) {
    case 'onlyBody': {
      return (
        <>
          <ChakraProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
              <Hydrate state={pageProps.dehydratedState}>
                <Head>
                  <meta charSet="utf-8" />
                  <link rel="shortcut icon" href="/favicon.png" />
                  <title>시퀀스</title>
                </Head>
                <Component {...pageProps} />
                <ReactQueryDevtools initialIsOpen={false} />
              </Hydrate>
            </QueryClientProvider>
          </ChakraProvider>
        </>
      );
    }
    case 'pomodoro': {
      return (
        <>
          <ChakraProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
              <Hydrate state={pageProps.dehydratedState}>
                <Head>
                  <meta charSet="utf-8" />
                  <link rel="shortcut icon" href="/favicon.png" />
                  <title>시퀀스</title>
                </Head>
                <PomoBody>
                  <Component {...pageProps} />
                </PomoBody>
                <ReactQueryDevtools initialIsOpen={false} />
              </Hydrate>
            </QueryClientProvider>
          </ChakraProvider>
        </>
      );
    }
    case 'mobilePomo': {
      return (
        <>
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
              <Head>
                <meta charSet="utf-8" />
                <link rel="shortcut icon" href="/favicon.png" />
                <title>시퀀스</title>
              </Head>
              <PomoBody>
                <Component {...pageProps} />
              </PomoBody>
              <ReactQueryDevtools initialIsOpen={false} />
            </Hydrate>
          </QueryClientProvider>
        </>
      );
    }
    default: {
      return (
        <>
          <ChakraProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
              <Hydrate state={pageProps.dehydratedState}>
                <Head>
                  <meta charSet="utf-8" />
                  <link rel="shortcut icon" href="/favicon.png" />
                  <title>시퀀스</title>
                </Head>
                <Header />
                <BodyWrapper>
                  <BodyContent>
                    <Component {...pageProps} />
                  </BodyContent>
                  <Footer />
                </BodyWrapper>
                <ReactQueryDevtools initialIsOpen={false} />
              </Hydrate>
            </QueryClientProvider>
          </ChakraProvider>
        </>
      );
    }
  }
};

export default App;
