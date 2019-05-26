/**
 * Register Theme Default
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.12
 */

import { reversePalette } from 'styled-theme/composer';
import sizes from './size.theme';
import palette from './palette.theme';
import fonts from './fonts.theme';

const theme = {
    sizes,
    palette,
    fonts,
    reversePalette: reversePalette(palette)
};

export default theme;
