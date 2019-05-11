import { css } from 'styled-components';

export const boxShadow = (...args) => css`
    -webkit-box-shadow: ${args.join(',')};
    -mox-box-shadow: ${args.join(',')};
    box-shadow: ${args.join(',')};
`;

export const boxShadowFormatted = (top, left, blur, color, inset = false) => {
    const position = `${inset ? 'inset ' : ''}${left}px ${top}px ${blur}px ${color}`;

    return boxShadow(position);
};

export const noBoxShadow = () => boxShadow(css`initial`);
