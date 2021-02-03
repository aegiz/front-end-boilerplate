/**
 * Return a Heading depending on the level which is passed
 */

import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    children: ReactNode;
}

const Heading = ({ level = 2, children }: Props): JSX.Element => {
    const tag = `h${level}`;
    return <Wrapper as={tag}>{children}</Wrapper>;
};

const Wrapper = styled.h2<{ as: ReactNode }>`
    color: rebeccapurple;
`;

export default Heading;
