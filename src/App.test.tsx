import React from 'react';
import { render } from 'enzyme';

import Apps from './App';

test('renders learn react link', () => {
    const instance = render(<Apps />);
    expect(instance.html()).toBe('Hello World');
});
