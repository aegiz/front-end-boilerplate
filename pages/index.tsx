import ControlledPopup from '@components/ControlledPopup';
import Image from 'next/image';
import Layout from '@components/Layout';
import Link from 'next/link';
import styled from 'styled-components';

const IndexPage = (): JSX.Element => {
    return (
        <Layout title="Next.js + TypeScript + Styled components">
            <TitleWithTheme>I am a boilertplate title</TitleWithTheme>
            <TitleWithMediaQuery>This title will be hidden on mobile</TitleWithMediaQuery>
            <SubTitleWithCustomProp zindex={2}>I am a subtitle passing a custom prop (a zindex)</SubTitleWithCustomProp>
            <SpanWithBooleanModifier>I am a simple span</SpanWithBooleanModifier>
            <SpanWithBooleanModifier $bold>... And I am a bold span</SpanWithBooleanModifier>
            <Paragraph>I am a simple paragraph</Paragraph>
            <ParagraphRed>I am a paragraph in Red</ParagraphRed>
            <BigParagraph fontSize="2xl">I am a paragraph which combines props and theme</BigParagraph>
            <p
                css={`
                    color: blue;
                `}
            >
                I am an element with a quick added style
            </p>
            <p
                css={({ theme }) => ({
                    color: theme.colors.grey.light,
                })}
            >
                I am an element with a quick added theme style
            </p>
            <Image src="/vercel.svg" alt="Vercel Logo" width={300} height={150} />
            <ControlledPopup />
            <p>
                Go to{' '}
                <Link href="/about">
                    <a>About page!</a>
                </Link>
            </p>
        </Layout>
    );
};

/*
 * Theme
 */

const TitleWithTheme = styled.h1`
    color: ${(props) => props.theme.colors.black};
`;

/*
 * Media queries
 */

const TitleWithMediaQuery = styled.h1`
    ${(props) => props.theme.mediaQueries.s} {
        display: none;
    }
`;

/*
 * Passing a prop
 */

const SubTitleWithCustomProp = styled.h2<{ zindex?: number }>`
    z-index: ${(props) => props.zindex};
`;

/*
 * Modifiers (using boolean) - 2 cases max
 */

const SpanWithBooleanModifier = styled.span<{ $bold?: boolean }>`
    font-weight: ${(props) => (props.$bold ? `bold` : `normal`)};
`;

/*
 * Modifiers (using inheritance) - * cases
 */

const Paragraph = styled.p`
    color: ${(props) => props.theme.colors.black};
`;

const ParagraphRed = styled(Paragraph)`
    color: red;
`;

const BigParagraph = styled.p<{ fontSize: string }>`
    // Combine props and theme
    font-size: ${(props) => props.theme.fontSizes[props.fontSize]};
`;

export default IndexPage;
