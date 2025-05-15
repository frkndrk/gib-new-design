import * as React from 'react';
import Head from 'next/head';
import { ThemeProvider, CssBaseline } from '@mui/material';
import createEmotionCache from '@/utils/createEmotionCache';
import { CacheProvider } from '@emotion/react';
import theme from '@/utils/theme';

import '@/styles/globals.css';
import Navbar from '@/components/navbar/Navbar';
import Topbar from '@/components/topbar/Topbar';
import Intro from '@/components/intro/intro';

// SSR cache için
const clientSideEmotionCache = createEmotionCache();

export default function App(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Topbar />
        <Navbar />
        <main className="min-h-screen">
          <Component {...pageProps} />
        </main>
        {/* <Footer /> */}
      </ThemeProvider>
    </CacheProvider>
  );
}
