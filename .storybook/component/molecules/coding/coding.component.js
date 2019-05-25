import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Highlight from 'react-highlight';

import './style.scss';

class CodingComponent extends Component {
    constructor() {
        super();
        this.copyToClipboard = this.copyToClipboard.bind(this);
    }

    copyToClipboard() {
        const { code } = this.props;
        const el = document.createElement('textarea');
        el.value = code;
        el.setAttribute('readonly', '');
        el.style = {
            position: 'absolute',
            left: '-9999px',
            display: 'none'
        };
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }

    render() {
        const { children, code } = this.props;
        return (
            <div className="ui-default__code">
                <div className="ui-default__code__result">{children}</div>
                <div className="ui-default__code__source-code">
                    <div className="ui-default__code__source-code__bar">
                        <p>Source Code</p>
                        <a
                            className="ui-default__code__copy"
                            onClick={this.copyToClipboard}
                        >
                            <i className="material-icons">file_copy</i>Copy
                        </a>
                    </div>
                    <Highlight>{code}</Highlight>
                </div>
            </div>
        );
    }
}

CodingComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ]).isRequired,
    code: PropTypes.string.isRequired
};

CodingComponent.defaultProps = {
    parent: false
};

export default CodingComponent;
