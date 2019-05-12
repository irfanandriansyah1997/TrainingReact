/**
 * Box Shadow Mixin
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.12
 */

import { css } from 'styled-components';

/**
 * Set box-shadow value
 * @param  {arra[css]} args
 */
export const boxShadow = (...args) => css`
    -webkit-box-shadow: ${args.join(',')};
    -mox-box-shadow: ${args.join(',')};
    box-shadow: ${args.join(',')};
`;

/**
 * Set box shadow with formatted
 * @param  {int}     top
 * @param  {int}     left
 * @param  {int}     blur
 * @param  {string}  color
 * @param  {boolean} inset
 */
export const boxShadowFormatted = (top, left, blur, color, inset = false) => {
    const position = `${inset ? 'inset ' : ''}${left}px ${top}px ${blur}px ${color}`;

    return boxShadow(position);
};

/**
 * To set default box-shadow attribute
 */
export const noBoxShadow = () => boxShadow(css`initial`);
