import styled from 'styled-components';
import PropTypes from 'prop-types';

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

    // Extra small devices (portrait phones, less than 576px)
    @media (max-width: 576px) {
        max-width: 576px;
        width: 100%;
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 576px) {
        max-width: 767.98px;
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
        max-width: 991.98px;
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
        max-width: 1199.98px;
    }
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
