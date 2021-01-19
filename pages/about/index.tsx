import Hero from './Hero';
import Layout from '../../components/Layout';
import Link from 'next/link';
import Title from './Title';

const AboutPage = (): JSX.Element => {
    return (
        <Layout>
            <article>
                <Title title="hello world" />
                <Hero />
                <Link href="/">Back home</Link>
            </article>
        </Layout>
    );
};

export default AboutPage;
