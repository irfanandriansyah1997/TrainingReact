import React from 'react';
import styled from 'styled-components';
import renderer from 'react-test-renderer';
import { backgroundColor, backgroundImage } from './background.mixin';
import 'jest-styled-components';

it('Test render background grey', () => {
    const Style = styled.button`
        ${backgroundColor('#ddd')}
    `;
    const component = renderer.create(<Style />).toJSON();
    expect(component).toHaveStyleRule('background-color', '#ddd');
});

it('Test render background image with center position', () => {
    const Style = styled.div`
        ${backgroundImage('images', 'center')}
    `;
    const component = renderer.create(<Style />).toJSON();
    expect(component).toHaveStyleRule('background-image', 'url(images)');
    expect(component).toHaveStyleRule('background-position', 'center');
    expect(component).toHaveStyleRule('background-repeat', 'initial');
});

it('Test render background image default', () => {
    const Style = styled.div`
        ${backgroundImage('images')}
    `;
    const component = renderer.create(<Style />).toJSON();
    expect(component).toHaveStyleRule('background-image', 'url(images)');
    expect(component).toHaveStyleRule('background-position', 'initial');
    expect(component).toHaveStyleRule('background-repeat', 'initial');
});
