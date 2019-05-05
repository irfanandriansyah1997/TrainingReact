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
    extraSmallDeviceMin: '575.98px',
    extraSmallDeviceMax: '576px',
    smallDeviceMin: '767.98px',
    smallDeviceMax: '768',
    mediumDeviceMin: '991.98px',
    mediumDeviceMax: '992px',
    largeDeviceMin: '1199.98px',
    largeDeviceMax: '1120px'
};

export default {
    ...fontSize,
    ...columnSize,
    ...spacingSize,
    ...viewportSize
};
