/**
 * Label Component Test
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.06.10
 */

import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import Label from './label.component';
import 'jest-styled-components';

import Theme from '@/components/themes/default';

it('Test render label primary', () => {
    const component = renderer
        .create(
            <ThemeProvider theme={Theme}>
                <Label
                    type="primary"
                    rounded={false}
                >
                    10
                </Label>
            </ThemeProvider>
        )
        .toJSON();

    /**
     * Default Style
     */
    expect(component).toHaveStyleRule('height', '20px');
    expect(component).toHaveStyleRule('min-width', '16px');
    expect(component).toHaveStyleRule('justify-content', 'center');
    expect(component).toHaveStyleRule('align-items', 'center');
    expect(component).toHaveStyleRule('padding', '0 10px');
    expect(component).toHaveStyleRule('background-color', '#3893d9');
    expect(component).toHaveStyleRule('color', '#fff');
    expect(component).toHaveStyleRule('border-radius', '0px');
});

it('Test render label tertiary rounded', () => {
    const component = renderer
        .create(
            <ThemeProvider theme={Theme}>
                <Label
                    type="tertiary"
                    rounded
                >
                    10
                </Label>
            </ThemeProvider>
        )
        .toJSON();

    /**
     * Default Style
     */
    expect(component).toHaveStyleRule('height', '20px');
    expect(component).toHaveStyleRule('min-width', '16px');
    expect(component).toHaveStyleRule('justify-content', 'center');
    expect(component).toHaveStyleRule('align-items', 'center');
    expect(component).toHaveStyleRule('padding', '0 10px');
    expect(component).toHaveStyleRule('background-color', '#e9eef2');
    expect(component).toHaveStyleRule('color', '#3e4246');
    expect(component).toHaveStyleRule('border-radius', '20px');
});
