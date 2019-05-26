/**
 * 404 Template Test
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.03
 */

import React from 'react';
import { shallow } from 'enzyme';
import Layout from './404-template.component';
import NavbarComponent from '@/components/organisms/navbar/navbar.component';

require('config/enzyme.config');

describe('Testing 404 layout ', () => {
    it('Test render 404 layout', () => {
        const layout = shallow(<Layout />);

        expect(layout.contains(<NavbarComponent />)).toBe(true);
    });
});
