import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavbarComponent from '@/components/organisms/navbar/navbar.component';
import FooterComponent from '@/components/organisms/footer/footer.component';

class DefaultTemplateComponent extends Component {
    render() {
        const { children } = this.props;

        return (
            <div className="ui ui-default">
                <div className="ui-default__navbar">
                    <NavbarComponent />
                </div>
                <div className="ui-default__content">{children}</div>
                <div className="ui-default__footer">
                    <FooterComponent />
                </div>
            </div>
        );
    }
}

DefaultTemplateComponent.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
};

export default DefaultTemplateComponent;
