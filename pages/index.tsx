import ComplexComponent from '@components/ComplexComponent';
import ControlledPopup from '@components/ControlledPopup';
import Image from 'next/image';
import Layout from '@components/Layout';
import Link from 'next/link';
import styled from 'styled-components';

/*
 * Theme & Media queries
 */

const TitleWithTheme = styled.h1`
    color: ${(props) => props.theme.colors.black};
    ${(props) => props.theme.mediaQueries.s} {
        color: ${(props) => props.theme.colors.grey.main};
    }
`;

/*
 * Custom props
 */

const SubtitleWithCustomProps = styled.h2`
    // Render 1 CSS property via props
    display: ${(props) => (props.display ? `block` : `none`)};
    // Render multiple CSS properties via props
    ${(props) => (props.display ? `opacity:1; z-index: 1;` : `opacity:0`)}
`;

/*
 * Combining props + theme together
 */

const SubtitleWithCombinedPropsAndTheme = styled.h2`
    font-size: ${(props) => (props.font === 'big' ? props.theme.fontSizes['xl'] : props.theme.fontSizes['l'])};
    // Note that the above line can be refactored as:
    font-size: ${(props) => props.theme.fontSizes[props.font === 'big' ? 'xl' : 'l']};
`;

/*
 * Inheritance
 */

const SubSubTitle = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes['normal']};
    color: ${({ theme }) => theme.colors.black};
`;

const SubSubTitleWithColor = styled(SubSubTitle)`
    color: red;
`;

const IndexPage = (): JSX.Element => {
    return (
        <Layout title="Next.js + TypeScript + Styled components">
            <TitleWithTheme>I am the boilerplate home</TitleWithTheme>
            <SubtitleWithCustomProps display="true">I am an h2 with custom props</SubtitleWithCustomProps>
            <SubtitleWithCombinedPropsAndTheme font="big">
                I am an h2 which combined props and theme
            </SubtitleWithCombinedPropsAndTheme>
            <SubSubTitle>I am an h3</SubSubTitle>
            <SubSubTitleWithColor>I am an h3 with color</SubSubTitleWithColor>
            <p
                css={`
                    color: ${({ theme }) => theme.colors.grey.light}}
                `}
            >
                I am an element which has a specific style so no need to recreate it
            </p>
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
