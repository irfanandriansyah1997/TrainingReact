/**
 * Default Template Test
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.03
 */

import React from 'react';
import { shallow } from 'enzyme';
import Layout from './default-template.component';
import FooterComponent from '@/components/organisms/footer/footer.component';

require('config/enzyme.config');

describe('Testing 404 layout ', () => {
    it('Test render 404 layout', () => {
        const layout = shallow(<Layout>Ini Content</Layout>);

        expect(layout.contains(<FooterComponent />)).toBe(true);
    });
});
