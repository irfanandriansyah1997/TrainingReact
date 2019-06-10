/**
 * Text Component Test
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.25
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import Text from './text.component';
import Size from '@/components/themes/default/size.theme';

import 'jest-styled-components';

import Theme from '@/components/themes/default';

it('Test render text', () => {
    const component = renderer
        .create(
            <ThemeProvider theme={Theme}>
                <Text
                    type="h1"
                    fontWeight="light"
                    color="#000"
                />
            </ThemeProvider>
        )
        .toJSON();

    const fontsize = Size.headingH1;
    const lineheight = Size.lineHeadingH1;

    /**
     * Default Style
     */
    expect(component).toHaveStyleRule('color', '#000');
    expect(component).toHaveStyleRule('font-weight', 'light');
    expect(component).toHaveStyleRule('font-size', fontsize);
    expect(component).toHaveStyleRule('line-height', lineheight);
});
