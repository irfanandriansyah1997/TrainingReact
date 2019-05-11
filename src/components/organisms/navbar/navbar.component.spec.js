import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './navbar.component';

require('config/enzyme.config');

describe('Testing navbar component in molecules component ', () => {
    it('Test render navbar component', () => {
        const navbar = shallow(<Navbar />);

        expect(navbar.exists('.navbar')).toBe(true);
    });
});
