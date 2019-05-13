import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class TextComponent extends Component {
    render() {
        const { children } = this.props;
        return <p className="ui-text">{children}</p>;
    }
}

TextComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ]).isRequired
};

export default TextComponent;
