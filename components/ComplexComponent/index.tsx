import Bottom from './Bottom';
import Top from './Top';
import styled from 'styled-components';

interface IComponent {
    className?: string;
    children?: JSX.Element;
}

const ComplexComponent = ({ className, children }: IComponent): JSX.Element => {
    return (
        <Wrapper className={className}>
            <Top />
            {children}
            <Bottom />
        </Wrapper>
    );
};

/*
 * Default styles
 */
const Wrapper = styled.div`
    background: grey;
    transition: all 0.3s;
    color: black;
    &:hover {
        color: red;
        background: #24353f;
    }
`;

/*
 * Custom Variant (see how it inherit the hover effect from Wrapper)
 */
export const ComplexComponentPurple = styled(ComplexComponent)`
    && {
        background: purple;
    }
`;

/*
 * Custom Variant with specific hover effect and theme
 */
export const ComplexComponentBlue = styled(ComplexComponent)`
    && {
        color: ${(props) => props.theme.colors.grey.light};
        background: blue;
        &:hover {
            background: #030eb4;
        }
    }
`;

export default ComplexComponent;
