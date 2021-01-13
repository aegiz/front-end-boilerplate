import { FC } from 'react';
import Hero from './Hero';
import Layout from '../../components/Layout';
import Link from 'next/link';

const AboutPage: FC = () => {
    return (
        <Layout>
            <article>
                <h1>Welcome to the About page!</h1>
                <Hero />
                <Link href="/">Back home</Link>
            </article>
        </Layout>
    );
};

export default AboutPage;
