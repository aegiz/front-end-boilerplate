/**
 * Declare `css` as a valid attribute (useful for styled component)
 */

import { CSSProp, createGlobalStyle } from 'styled-components';
declare module 'react' {
    interface HTMLAttributes<T> extends DOMAttributes<T> {
        css?: CSSProp;
    }
}

/**
 * Declare CSS theme
 */

export const theme = {
    font:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    colors: {
        white: '#FFF',
        black: '#000',
        grey: {
            light: '#CCC',
            main: '#888',
            middle: '#222',
            dark: '#111',
        },
    },
    breakpoints: {
        xxs: 305,
        xs: 480,
        s: 767,
        m: 979,
        l: 1200,
        xl: 1650,
    },
    fontWeights: {
        hairline: '100',
        thin: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
    },
    fontSizes: {
        xs: '0.5rem',
        s: '0.75rem',
        m: '0.875rem',
        normal: '1rem',
        l: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.7rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '5rem',
        '7xl': '8rem',
        '8xl': '10rem',
        '9xl': '12rem',
        '10xl': '15rem',
        '11xl': '18rem',
    },
    mediaQueries: {
        xxs: '@media only screen and (max-width: 305px)',
        xs: '@media only screen and (max-width: 480px)',
        s: '@media only screen and (max-width: 767px)',
        m: '@media only screen and (max-width: 979px)',
        l: '@media only screen and (max-width: 1200px)',
        xl: '@media only screen and (max-width: 1650px)',
    },
};

export const Styles = createGlobalStyle`
  *, *:before, *:after {
		box-sizing: border-box;
	}
	body {
		background: white;
    margin: 0;
    padding: 0;
    font-family: ${(props) => props.theme.font};
		font-size: ${({ theme }) => theme.fontSizes.normal};
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	h1,	h2,	h3,	h4,	h5,	h6 {
		margin: 0;
	}
	button:focus,
	input:focus {
		outline: 0;
	}
	button {
		cursor: pointer;
		background: transparent;
		border: none;
	}
`;
