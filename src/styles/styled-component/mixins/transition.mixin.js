import { css } from 'styled-components';

export const transition = (...args) => css`
    -webkit-transition: ${css(...args)};
    -moz-transition: ${css(...args)};
    -ms-transition: ${css(...args)};
    -o-transition: ${css(...args)};
    transition: ${css(...args)};
`;
