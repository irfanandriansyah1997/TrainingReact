/**
 * Font Mixin
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.12
 */

import { css } from 'styled-components';

/**
 * To set font family
 * @param  {string} name
 */
export const fontFamily = (name) => css`
    font-family: ${name};
`;

/**
 * To set font weight
 * @param  {string|int} size
 */
export const fontSize = (size) => css`
    font-size: ${size};
`;

/**
 * To set font weight
 * @param  {string|int} weight
 */
export const fontWeight = (weight = 400) => css`
    font-weight: ${weight};
`;

/**
 * To set font style
 * @param  {string} style
 */
export const fontStyle = (style = 'normal') => css`
    font-style: ${style};
`;

/**
 * To set font strecth
 * @param  {string} style
 */
export const fontStretch = (style = 'normal') => css`
    font-stretch: ${style};
`;

/**
 * To set line height
 * @param  {string|int} style
 */
export const lineHeight = (size) => css`
    line-height: ${size};
`;

/**
 * To set letter-spacing
 * @param  {string|int} size
 */
export const letterSpacing = (size = 'initial') => css`
    letter-spacing: ${size};
`;

/**
 * To set text-align
 * @param  {string} size
 */
export const textAlign = (size = 'initial') => css`
    text-align: ${size};
`;

/**
 * To set font color
 * @param  {string} color
 */
export const fontColor = (color) => css`
    color: ${color};
`;

/**
 * To set all attribute related to typography
 * @param  {string}     paramFontFamily
 * @param  {string|int} paramFontSize
 * @param  {string|int} paramFontWeight
 * @param  {string|int} paramFontStyle
 * @param  {string}     paramFontStretch
 * @param  {string|int} paramLineHeight
 * @param  {string|int} paramLetterSpacing
 * @param  {string}     paramTextAlign
 * @param  {string}     paramFontColor
 */
export const fontFace = (
    paramFontFamily,
    paramFontSize,
    paramFontWeight,
    paramFontStyle,
    paramFontStretch,
    paramLineHeight,
    paramLetterSpacing,
    paramTextAlign,
    paramFontColor
) => css`
    ${fontFamily(paramFontFamily)}
    ${fontSize(paramFontSize)}
    ${fontWeight(paramFontWeight)}
    ${fontStyle(paramFontStyle === null ? 'normal' : paramFontStyle)}
    ${fontStretch(paramFontStretch === null ? 'normal' : paramFontStretch)}
    ${lineHeight(paramLineHeight)}
    ${letterSpacing(paramLetterSpacing === null ? 'initial' : paramLetterSpacing)}
    ${textAlign(paramTextAlign === null ? 'initial' : paramTextAlign)}
    ${fontColor(paramFontColor)}
`;
