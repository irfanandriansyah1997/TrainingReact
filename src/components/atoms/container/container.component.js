import styled from 'styled-components';
import PropTypes from 'prop-types';
import { palette, size } from 'styled-theme';
import { backgroundColor } from '@/styles/styled-component/mixins/background.mixin';
import { upMediaQuery, downMediaQuery, betweenMediaQuery } from '@/styles/styled-component/mixins/media-query.mixin';

const ContainerComponent = styled.div`
    display: ${(props) => props.display};
    position: ${(props) => props.position};
    margin-right: auto;
    margin-left: auto;
    max-width: 1200px;
    height: ${(props) => props.height};
    width: calc(100% - 232px);
    padding-right: 10px;
    padding-left: 10px;
    ${backgroundColor(palette('white', 0, false))}

    // Extra small devices (portrait phones, less than 576px)
    ${downMediaQuery(size('extraSmallDeviceMax'))`
        max-width: ${size('extraSmallDeviceMax')}px;
        width: 100%;
    `}

    // Medium devices (tablets, 768px and up)
    ${upMediaQuery(size('extraSmallDeviceMax'))`
        max-width: ${size('smallDeviceMin')}px;
        width: 100%;
    `}

    // Medium devices (tablets, 768px and up)
    ${upMediaQuery(size('smallDeviceMax'))`
        max-width: ${size('mediumDeviceMin')}px;
        width: 100%;
    `}

    // Large devices (desktops, 992px and up)
    ${upMediaQuery(size('mediumDeviceMax'))`
        max-width: ${size('largeDeviceMin')}px;
        width: 100%;
    `}
`;

ContainerComponent.propTypes = {
    display: PropTypes.string,
    position: PropTypes.string,
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ContainerComponent.defaultProps = {
    display: 'flex',
    position: 'relative',
    height: 'inherit'
};

export default ContainerComponent;
