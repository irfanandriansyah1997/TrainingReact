/*
 * variable font size
 */
const fontSize = {
    textSize3Xl: '32px',
    textSize2Xl: '24px',
    textSizeXl: '20px',
    textSizeLg: '18px',
    textSizeBase: '16px',
    textSizeSm: '14px',
    textSizeXs: '12px'
};

/*
 * variable heading font size
 */
const fontSizeHeading = {
    headingH1: fontSize.textSize3Xl,
    headingH2: fontSize.textSize2Xl,
    headingH3: fontSize.textSizeXl,
    headingH4: fontSize.textSizeLg,
    headingH5: fontSize.textSizeBase,
    headingH6: fontSize.textSizeSm,
    headingNormal: fontSize.textSizeBase,
    headingFeatured: '28px',
    headingMeta: fontSize.textSizeSm,
    headingCaption: fontSize.textSizeSm
};

/*
 * variable heading line height
 */
const lineHeightHeading = {
    lineHeadingH1: '44px',
    lineHeadingH2: '33px',
    lineHeadingH3: '27px',
    lineHeadingH4: '25px',
    lineHeadingH5: '22px',
    lineHeadingH6: '19px',
    lineHeadingNormal: '22px',
    lineHeadingFeatured: '39px',
    lineHeadingMeta: '19px',
    lineHeadingCaption: '24px'
};

/*
 * button font size
 */
const buttonFontSize = {
    buttonFontDefault: fontSize.textSizeSm,
    buttonFontSmall: fontSize.textSizeXs
};

/*
 * variable spacing padding & margin
 */
const spacingSize = {
    spacing3Xl: '48px',
    spacing2Xl: '40px',
    spacingXl: '32px',
    spacingLg: '24px',
    spacingMd: '16px',
    spacingSm: '12px',
    spacingXs: '8px',
    spacing2Xs: '4px',
    spacing3Xs: '2px'
};

/*
 * variable column size
 */
const columnSize = Array.from(Array(12), (x, index) => {
    const currentIndex = index + 1;
    return {
        [`col${currentIndex}`]: `${(100 / 12) * currentIndex}%`
    };
}).reduce((cur, item) => ({
    ...cur,
    ...item
}));

/*
 * variable viewport responsive
 */
const viewportSize = {
    extraSmallDeviceMin: '575.98',
    extraSmallDeviceMax: '576',
    smallDeviceMin: '767.98',
    smallDeviceMax: '768',
    mediumDeviceMin: '991.98',
    mediumDeviceMax: '992',
    largeDeviceMin: '1199.98',
    largeDeviceMax: '1120'
};

export default {
    ...fontSize,
    ...fontSizeHeading,
    ...lineHeightHeading,
    ...columnSize,
    ...spacingSize,
    ...viewportSize,
    ...buttonFontSize
};
