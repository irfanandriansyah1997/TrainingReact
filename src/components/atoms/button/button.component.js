import styled from 'styled-components';
import PropTypes from 'prop-types';

const ButtonComponent = styled.button`
    diplay: ${({ display }) => display};
`;

ButtonComponent.propTypes = {
    display: PropTypes.string,
    position: PropTypes.string,
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

ButtonComponent.defaultProps = {
    display: 'flex',
    position: 'relative',
    height: 'inherit'
};


export default ButtonComponent;
