import ComplexComponent, { ComplexComponentBlue, ComplexComponentPurple } from '@components/ComplexComponent';

import ControlledPopup from '@components/ControlledPopup';
import Hero from './Hero';
import Layout from '@components/Layout';
import Link from 'next/link';
import styled from 'styled-components';

const AboutPage = (): JSX.Element => {
    return (
        <Layout>
            <article>
                <h1>hello world</h1>
                <Hero />
                {/* Default component */}
                <ComplexComponent />
                {/* Quick variant */}
                <ComplexComponentRed />
                {/* Defined variant */}
                <ComplexComponentPurple />
                {/* Defined variant 2 */}
                <ComplexComponentBlue />
                {/* Default Component with additional children */}
                <ComplexComponent>
                    <ControlledPopup />
                </ComplexComponent>
                <Link href="/">Back home</Link>
            </article>
        </Layout>
    );
};

/*
 * How to test a quick variant:
 */

const ComplexComponentRed = styled(ComplexComponent)`
    && {
        background: red;
    }
`;

export default AboutPage;
