import ControlledPopup from '../components/controlledPopup';
import { FC } from 'react';
import Image from 'next/image';
import Layout from '../components/Layout';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 50px;
    color: ${({ theme }) => theme.colors.primary};
`;

const IndexPage: FC = () => {
    return (
        <Layout title="Next.js + TypeScript + Styled components">
            <Title>Example page</Title>
            <Image src="/vercel.svg" alt="Vercel Logo" width={300} height={150} />
            <ControlledPopup />
        </Layout>
    );
};

export default IndexPage;
