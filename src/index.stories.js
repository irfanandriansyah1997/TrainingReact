/**
 * Storybook Main Project
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.12
 */

/* eslint-disable */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import defaultTheme from '@/components/themes/default';

const themes = [defaultTheme];

/**
 * Component
 */
import BadgesStorybook from '@/components/atoms/badges/storybook/badges.component.stories';
import ButtonStorybook from '@/components/atoms/button/storybook/button.component.stories';
import IconStorybook from  '@/components/atoms/icon/storybook/icon.component.stories';
import TextStorybook from  '@/components/atoms/text/storybook/text.component.stories';


/**
 * Markdown
 */
import BadgesMD from '@/components/atoms/badges/storybook/docs.md';
import ButtonMD from '@/components/atoms/button/storybook/docs.md';
import IconMD from '@/components/atoms/icon/storybook/docs.md';
import TextMD from  '@/components/atoms/text/storybook/docs.md';

storiesOf('Atomic Component', module)
    .addDecorator(withThemesProvider(themes))
    .add('Badges', () => <BadgesStorybook />, {
        notes: {
            markdown: BadgesMD
        }
    })
    .add('Button', () => <ButtonStorybook />, {
        notes: {
            markdown: ButtonMD
        }
    })
    .add('Icon', () => <IconStorybook />, {
        notes: {
            markdown: IconMD
        }
    })
    .add('Text', () => <TextStorybook />, {
        notes: {
            markdown: TextMD
        }
    });
