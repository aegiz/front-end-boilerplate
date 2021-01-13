import ComplexComponent from '../components/ComplexComponent';
import ControlledPopup from '../components/ControlledPopup';
import { FC } from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';
import Link from 'next/link';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 50px;
    color: ${({ theme }) => theme.colors.primary};
`;

const IndexPage: FC = () => {
    return (
        <Layout title="Next.js + TypeScript + Styled components">
            <Title>Homepage</Title>
            <Image src="/vercel.svg" alt="Vercel Logo" width={300} height={150} />
            <ControlledPopup />
            <ComplexComponent />
            <p>
                Go to{' '}
                <Link href="/about">
                    <a>About page!</a>
                </Link>
            </p>
        </Layout>
    );
};

export default IndexPage;
