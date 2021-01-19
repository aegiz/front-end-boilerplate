import { Styles, theme } from '../utils/theme';

import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
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
