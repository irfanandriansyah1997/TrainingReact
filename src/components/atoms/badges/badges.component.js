/**
 * Badges Component
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.26
 */

import React, { memo } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { palette, font, size } from 'styled-theme';
import { backgroundColor } from '@/styles/styled-component/mixins/background.mixin';
import { fontFace } from '@/styles/styled-component/mixins/font.mixin';
import { rounded } from '@/styles/styled-component/mixins/border-radius.mixin';

export const BadgesStyle = styled.div`
    position: relative;
    display: inline-flex;
    width: initial;
    height: 16px;
    min-width: 16px;
    justify-content: center;
    align-items: center;
    padding: 0 5px;
    margin: 0 3px;

    ${rounded(8)}
    ${backgroundColor(palette('secondary', 0))}
    ${fontFace(
        font('primary'),
        size('textSizeXs'),
        '400',
        'normal',
        'normal',
        '1.33',
        'normal',
        'center',
        palette('white', 0)
    )}
`;

const BadgesComponent = ({
    children
}) => {
    const getValue = (param) => {
        const temp = parseInt(`${param}`, 10);

        return temp > 99 ? '99+' : temp;
    };

    return (
        <BadgesStyle>
            { getValue(children) }
        </BadgesStyle>
    );
};

BadgesComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired
};

export default memo(BadgesComponent);
