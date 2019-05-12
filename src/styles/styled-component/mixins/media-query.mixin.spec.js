/**
 * Media Query Mixin Test
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.12
 */

import React from 'react';
import styled, { css } from 'styled-components';
import renderer from 'react-test-renderer';
import { upMediaQuery, downMediaQuery, betweenMediaQuery } from './media-query.mixin';
import 'jest-styled-components';

it('Test render media query', () => {
    const Style = styled.button`
        background-color: #ff000;

        ${upMediaQuery(500)`
            background-color: #ddd;
        `}

        ${downMediaQuery(700)`
            background-color: #aaa;
        `}

        ${betweenMediaQuery(300, 500)`
            background-color: #000;
        `}
    `;
    const component = renderer.create(<Style />).toJSON();

    // upMediaQuery test
    expect(component).toHaveStyleRule('background-color', '#ddd', {
        media: '(min-width:500px)'
    });

    // downMediaQuery Test
    expect(component).toHaveStyleRule('background-color', '#aaa', {
        media: '(max-width:700px)'
    });

    // betweenMediaQuery Test
    expect(component).toHaveStyleRule('background-color', '#000', {
        media: '(min-width:300px) and (max-width:499.98px)'
    });

    // default style test
    expect(component).toHaveStyleRule('background-color', '#ddd', {
        media: '(min-width:500px)'
    });
    expect(component).toHaveStyleRule('background-color', '#ff000');
});
