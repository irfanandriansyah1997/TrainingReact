import { css } from 'styled-components';

export const backgroundImage = (path, position = 'initial', repeat = 'initial') => css`
    background-image: url(${path});
    background-position: ${position};
    background-repeat: ${repeat};
`;

export const backgroundColor = (color) => css`
    background-color: ${color};
`;
