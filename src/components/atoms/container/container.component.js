/**
 * Container Component
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.03
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';
import { size } from 'styled-theme';
import { upMediaQuery, downMediaQuery } from '@/styles/styled-component/mixins/media-query.mixin';

const ContainerComponent = styled.div`
    position: ${(props) => props.position};
    display: ${(props) => props.display};
    margin: auto;
    padding: 0 10px;
    height: ${(props) => props.height};
    width: calc(100% - 232px);
    max-width: 1200px;

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
