/**
 * Text Component
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.25
 */

import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import {
    generateHeadingStyle,
    fontWeight,
    fontColor
} from '@/styles/styled-component/mixins/font.mixin';

const TextComponent = styled.p`
    display: block;
    margin: 10px 0;

    ${(props) => css`
        ${generateHeadingStyle(props.type)}
        ${fontWeight(props.fontWeight)}
        ${fontColor(props.fontColor)}
    `}
`;

TextComponent.propTypes = {
    type: PropTypes.oneOf([
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'normal',
        'featured',
        'meta',
        'caption'
    ]),
    fontWeight: PropTypes.oneOf(['light', 'normal', 'medium', 'semibold', 'bold']),
    color: PropTypes.string
};

TextComponent.defaultProps = {
    type: 'normal',
    fontWeight: null,
    color: null
};

export default TextComponent;
