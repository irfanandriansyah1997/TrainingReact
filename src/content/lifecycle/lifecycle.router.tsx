import React, { ReactNode, FunctionComponent } from 'react';

import ContextModules from './context';
import FragmentModules from './fragment';
import { RoutingModulesInterface } from '../../shared/modules/routing/interface/routing-modules.interface';
import { RoutingModulesDecorator, RoutingSubModulesDecorator } from '../../shared/modules/routing/decorator/router.decorator';

/**
 * Content Router
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.08.22
 */
@RoutingModulesDecorator('/lifecycle')
class LifecycleRouter implements RoutingModulesInterface {
    render(): ReactNode {
        return (
            <div className="heading">
                lifecycle World
            </div>
        );
    }

    /**
     * Context Modules
     * @return {FunctionComponent}
     */
    @RoutingSubModulesDecorator('/context')
    public contextModules(): FunctionComponent {
        return ContextModules;
    }

    /**
     * Fragment Modules
     * @return {FunctionComponent}
     */
    @RoutingSubModulesDecorator('/fragment')
    public fragmentModules(): FunctionComponent {
        return FragmentModules;
    }
}

export default LifecycleRouter;