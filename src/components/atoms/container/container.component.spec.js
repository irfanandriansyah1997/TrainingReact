/**
 * Container Component Test
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.03
 */

import React from 'react';
import renderer from 'react-test-renderer';
import ContainerComponent from './container.component';
import 'jest-styled-components';

describe('Testing container component in atomic component ', () => {
    it('Test render container component', () => {
        const component = renderer.create(<ContainerComponent />).toJSON();
        expect(component).toHaveStyleRule('position', 'relative');
        expect(component).toHaveStyleRule('display', 'flex');
        expect(component).toHaveStyleRule('height', 'inherit');
        expect(component).toHaveStyleRule('margin', 'auto');
    });

    it('Test render container component with position absolute', () => {
        const component = renderer.create(<ContainerComponent position="absolute" />).toJSON();
        expect(component).toHaveStyleRule('position', 'absolute');
        expect(component).toHaveStyleRule('display', 'flex');
        expect(component).toHaveStyleRule('height', 'inherit');
        expect(component).toHaveStyleRule('margin', 'auto');
    });

    it('Test render container component with display block', () => {
        const component = renderer.create(<ContainerComponent
            position="absolute"
            display="block"
        />).toJSON();
        expect(component).toHaveStyleRule('position', 'absolute');
        expect(component).toHaveStyleRule('display', 'block');
        expect(component).toHaveStyleRule('height', 'inherit');
        expect(component).toHaveStyleRule('margin', 'auto');
    });
});
