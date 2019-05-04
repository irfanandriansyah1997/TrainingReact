import React, { Component, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import FooterComponent from '@/components/organisms/footer/footer.component';
import './style/style.scss';

const NavbarComponent = lazy(() => import('@/components/organisms/navbar/navbar.component'));

class DefaultTemplateComponent extends Component {
    render() {
        const { children } = this.props;

        return (
            <div className="ui ui-default">
                <div className="ui-default__navbar fixed block">
                    <Suspense fallback={null}>
                        <NavbarComponent />
                    </Suspense>
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
