/**
 * FrontPage Test
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.05
 */

import React from 'react';
import { shallow } from 'enzyme';
import Page from './front-page.page';
import DefaultTemplate from '@/components/templates/default-template/default-template.component';

require('config/enzyme.config');

describe('Testing Front Page', () => {
    it('Test render Front Page', () => {
        shallow(<Page />);
    });
});
