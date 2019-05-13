import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class HeadingComponent extends Component {
    getClassName() {
        const { parent } = this.props;
        const className = {
            'ui-heading': true,
            'ui-heading--parent': parent
        };

        return Object.keys(className)
            .filter((item) => className[item])
            .join(' ');
    }

    render() {
        const { children } = this.props;
        return <h1 className={this.getClassName()}>{children}</h1>;
    }
}

HeadingComponent.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node, PropTypes.string]).isRequired,
    parent: PropTypes.bool
};

HeadingComponent.defaultProps = {
    parent: false
};

export default HeadingComponent;
