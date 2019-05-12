/**
 * Transition Mixin
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.12
 */

import { css } from 'styled-components';

/**
 * Set transition attribute
 * @param  {array[css]} args
 */
export const transition = (...args) => css`
    -webkit-transition: ${css(...args)};
    -moz-transition: ${css(...args)};
    -ms-transition: ${css(...args)};
    -o-transition: ${css(...args)};
    transition: ${css(...args)};
`;
