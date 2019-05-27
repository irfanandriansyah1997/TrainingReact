/**
 * Label Component
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.27
 */

import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { palette } from 'styled-theme';
import { backgroundColor } from '@/styles/styled-component/mixins/background.mixin';
import { fontWeight, fontColor } from '@/styles/styled-component/mixins/font.mixin';
import { rounded as roundedMixin } from '@/styles/styled-component/mixins/border-radius.mixin';
import { BadgesStyle } from '@/components/atoms/badges/badges.component';

export const LabelStyle = styled(BadgesStyle)`
    height: 20px;
    min-width: 16px;
    justify-content: center;
    align-items: center;
    padding: 0 10px;

    ${(props) => css`
        ${backgroundColor(palette(props.type, props.type === 'tertiary' ? 3 : 0))}
        ${fontColor(palette(`${props.type}Text`, 0))}
        ${roundedMixin(props.rounded ? '20px' : '0')}
        ${fontWeight(500)}
    `}
`;

LabelStyle.propTypes = {
    type: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'danger', 'warning', 'success']),
    rounded: PropTypes.bool
};

LabelStyle.defaultProps = {
    type: 'tertiary',
    rounded: true
};

const LabelComponent = ({
    children,
    type,
    rounded
}) => ((
    <LabelStyle
        type={type}
        rounded={rounded}
    >
        { children }
    </LabelStyle>
));

LabelComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ]).isRequired,
    type: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'danger', 'warning', 'success']),
    rounded: PropTypes.bool
};

LabelComponent.defaultProps = {
    type: 'tertiary',
    rounded: true
};

export default memo(LabelComponent);
