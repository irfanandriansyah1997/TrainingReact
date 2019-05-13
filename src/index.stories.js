/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import defaultTheme from '@/components/themes/default';

const themes = [defaultTheme];

import ButtonStorybook from '@/components/atoms/button/storybook/button.component.stories';

storiesOf('Atomic Component', module)
    .addDecorator(withThemesProvider(themes))
    .add('Button', () => <ButtonStorybook />);
