/**
 * Media Query Mixin
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.12
 */

import { css } from 'styled-components';

/**
 * Set media query for min-width
 * @param  {int} breakpoint
 */
export const upMediaQuery = (breakpoint) => (...args) => css`
    @media (min-width: ${breakpoint}px) {
        ${css(...args)}
    }
`;

/**
 * Set media query for max-width
 * @param  {int} breakpoint
 */
export const downMediaQuery = (breakpoint) => (...args) => css`
    @media (max-width: ${breakpoint}px) {
        ${css(...args)}
    }
`;

/**
 * Set media query between `min-width` & `max-width`
 * @param  {int} min
 * @param  {int} max
 */
export const betweenMediaQuery = (min, max) => (...args) => css`
    @media (min-width: ${min}px) and (max-width: ${max - 0.02}px) {
        ${css(...args)}
    }
`;
