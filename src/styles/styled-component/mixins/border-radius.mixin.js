import { css } from 'styled-components';

export const rounded = (size) => css`
    -webkit-border-radius: ${size}px;
    -moz-border-radius: ${size}px;
    border-radius: ${size}px;
`;
