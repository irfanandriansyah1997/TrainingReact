/**
 * Button Component
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.13
 */

import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { palette, font, size } from 'styled-theme';
import { rounded } from '@/styles/styled-component/mixins/border-radius.mixin';
import { backgroundColor } from '@/styles/styled-component/mixins/background.mixin';
import { boxShadow, noBoxShadow } from '@/styles/styled-component/mixins/box-shadow.mixin';
import { fontFace, fontColor } from '@/styles/styled-component/mixins/font.mixin';
import { transition } from '@/styles/styled-component/mixins/transition.mixin';

const getBackgroundStyle = (disable, outline, type) => {
    if (outline) {
        return css`
            ${backgroundColor(palette('white', 0))}

            &:hover,
            &:focus {
                ${backgroundColor(disable ? palette('white', 0) : palette(type, 1))}
            }
        `;
    }

    return css`
        ${backgroundColor(palette(type, disable ? 2 : 0))}

        &:hover,
        &:focus {
            ${backgroundColor(palette(type, disable ? 2 : 1))}
        }
    `;
};

const getBorderStyle = (disable, type) => {
    if (type !== 'tertiary') {
        return css`
            border: 1px solid ${palette(type, disable ? 2 : 0)};

            &:hover,
            &:focus {
                border: 1px solid ${palette(type, disable ? 2 : 1)};
            }
        `;
    }

    return css`
        border: 1px solid ${palette('border', 0)};
    `;
};

const getBoxShadowStyle = (shadow) => {
    if (shadow) {
        return css`
            ${boxShadow(css`
                0 1px 2px rgba(0, 0, 0, 0.05),
                0 2px 4px rgba(0, 0, 0, 0.075)
            `)}

            &:hover,
            &:focus {
                ${boxShadow(css`
                    0 2px 4px rgba(0, 0, 0, 0.05),
                    0 3px 6px rgba(0, 0, 0, 0.075),
                    0 4px 8px rgba(0, 0, 0, 0.1)
                `)}
            }
        `;
    }

    return css`
        ${noBoxShadow()}
    `;
};

const getFontStyle = (typeSize) => css`
    ${fontFace(
        font('primary'),
        typeSize === 'default' ? size('buttonFontDefault') : size('buttonFontSmall'),
        '500',
        'normal',
        'normal',
        '1.36',
        'normal',
        'center'
    )}
`;

const getFontColor = (disable, outline, type) => {
    if (outline) {
        return css`
            ${fontColor(palette(`${type}Text`, disable ? 3 : 2))}

            &:hover,
            &:focus {
                ${fontColor(palette(`${type}Text`, disable ? 3 : 0))}
            }
        `;
    }

    return css`
        ${fontColor(palette(`${type}Text`, disable ? 1 : 0))}

        &:hover,
        &:focus {
            ${fontColor(palette(`${type}Text`, disable ? 1 : 0))}
        }
    `;
};

const ButtonComponent = styled.button`
    position: ${({ position }) => position}
    display: ${({ display }) => display};
    height: ${(props) => (props.size === 'default' ? '41px' : '32px')};
    padding: ${(props) => (props.size === 'default' ? '0 16px' : '0 8px')};
    cursor: ${(props) => (props.disable ? 'not-allowed' : 'pointer')};
    align-items: center;
    justify-content: center;
    flex-wrap: no-wrap;
    text-decoration: none;
    margin: 5px;
    outline: 0;

    ${(props) => css`
        ${rounded(3)}
        ${getFontStyle(props.size)}
        ${getFontColor(props.disable, props.outline, props.type)}
        ${getBackgroundStyle(props.disable, props.outline, props.type)}
        ${getBorderStyle(props.disable, props.type)}
        ${getBoxShadowStyle(props.shadow)}
        ${transition(css`0.15s cubic-bezier(0.7, 0.3, 0, 1)`)}`}
`;

ButtonComponent.propTypes = {
    disable: PropTypes.bool,
    display: PropTypes.string,
    outline: PropTypes.bool,
    position: PropTypes.string,
    shadow: PropTypes.bool,
    size: PropTypes.oneOf(['default', 'small']),
    type: PropTypes.oneOf(['primary', 'secondary', 'tertiary'])
};

ButtonComponent.defaultProps = {
    disable: false,
    display: 'flex',
    outline: false,
    position: 'relative',
    shadow: false,
    size: 'default',
    type: 'primary'
};

export default ButtonComponent;
