import React, { memo } from 'react';
import PropTypes from 'prop-types';

import './style/style.scss';

const getClassName = (children, size, type) => {
    const response = {
        'ui-atomic-icon': true,
        'material-icons': type === 'material',
        uif: type === 'urbanindo',
        [children]: type === 'urbanindo'
    };

    if (typeof size === 'string') {
        response[`ui-atomic-icon--${size}`] = true;
    }

    return Object.keys(response)
        .filter(item => response[item])
        .map(item => item)
        .join(' ');
};

const getStyle = (color, size) => {
    const response = {
        color
    };

    if (typeof size === 'number') {
        response.fontSize = `${size}px`;
    }

    return response;
};

const IconComponent = ({
    color,
    children,
    size,
    type
}) => ((
    <i
        className={getClassName(children, size, type)}
        style={getStyle(color, size)}
    >
        { type === 'material' ? children : null}
    </i>
));

IconComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node, PropTypes.string
    ]).isRequired,
    color: PropTypes.string,
    size: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(['default', 'small', 'big'])
    ]),
    type: PropTypes.oneOf(['material', 'urbanindo'])
};

IconComponent.defaultProps = {
    size: 'default',
    color: '#3e4246',
    type: 'material'
};

export default memo(IconComponent);
