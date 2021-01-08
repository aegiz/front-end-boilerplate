import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { AppProps } from 'next/app';
import { FC } from 'react';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
    colors: {
        primary: '#0070f3',
    },
};

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
};

export default App;
