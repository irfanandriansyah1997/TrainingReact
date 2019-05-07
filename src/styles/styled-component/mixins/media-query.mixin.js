import { css } from 'styled-components';

export const upMediaQuery = (breakpoint) => (...args) => css`
    @media (min-width: ${breakpoint}px) {
        ${css(...args)}
    }
`;

export const downMediaQuery = (breakpoint) => (...args) => css`
    @media (max-width: ${breakpoint}px) {
        ${css(...args)}
    }
`;

export const betweenMediaQuery = (min, max) => (...args) => css`
    @media (
        min-width: ${min}px
    ) and (
        max-width: ${max - 0.02}px
    ) {
        ${css(...args)}
    }
`;
