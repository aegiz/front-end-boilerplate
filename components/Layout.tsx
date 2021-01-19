import Head from 'next/head';
import { ReactNode } from 'react';

interface Props {
    children?: ReactNode;
    title?: string;
}

const Layout = ({ children, title = 'This is the default title' }: Props): JSX.Element => (
    <>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        {children}
        <footer>
            <hr />
            <span>(Footer)</span>
        </footer>
    </>
);

export default Layout;
