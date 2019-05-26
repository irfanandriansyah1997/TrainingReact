/**
 * Navbar Component Test
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.03
 */

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
