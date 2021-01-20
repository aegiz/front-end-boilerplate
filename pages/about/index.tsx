import Hero from './Hero';
import Layout from '@components/Layout';
import Link from 'next/link';

const AboutPage = (): JSX.Element => {
    return (
        <Layout>
            <article>
                <h1>hello world</h1>
                <Hero />
                <Link href="/">Back home</Link>
            </article>
        </Layout>
    );
};

export default AboutPage;
