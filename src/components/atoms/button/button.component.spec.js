import React from 'react';
import { shallow } from 'enzyme';
import Button from './button.component';

require('config/enzyme.config');

it('Link changes the class when hovered', () => {
    const checkbox = shallow(<Button />);

    expect(checkbox.text()).toEqual('JIJI');

    // expect(queryByLabelText(/JIJI/i)).toBeTruthy();
    // expect(container.firstChild.classList.contains('asas')).toBe(true);
});
