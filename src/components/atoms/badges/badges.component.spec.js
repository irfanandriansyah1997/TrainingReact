/**
 * Badges Component Test
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.26
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import Badges from './badges.component';
import Size from '@/components/themes/default/size.theme';
import Palette from '@/components/themes/default/palette.theme';
import Theme from '@/components/themes/default';
import 'jest-styled-components';

require('config/enzyme.config');

it('Test render text', () => {
    [
        {
            value: 3,
            expected: 3
        },
        {
            value: 52,
            expected: 52
        },
        {
            value: 150,
            expected: '99+'
        }
    ].map(item => {
        const component = renderer.create(
            <ThemeProvider theme={Theme}>
                <Badges>{item.value}</Badges>
            </ThemeProvider>
        ).toJSON();

        const fontsize = Size.textSizeXs;
        const color = Palette.white[0];
        const background = Palette.secondary[0];

        /**
         * Default Style
         */
        expect(component).toHaveStyleRule('color', color);
        expect(component).toHaveStyleRule('font-size', fontsize);
        expect(component).toHaveStyleRule('background-color', background);


        const badges = render(<Badges>{item.value}</Badges>);
        expect(badges.text()).toContain(item.expected);

        return item;
    });
});
