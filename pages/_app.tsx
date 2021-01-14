import { Styles, theme } from '../utils/theme';

import { AppProps } from 'next/app';
import { FC } from 'react';
import { ThemeProvider } from 'styled-components';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Styles />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
};

export default App;
