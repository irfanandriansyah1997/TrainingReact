import LifecycleRouter from './content/lifecycle/lifecycle.router';
import RoutingAppAbstract from './shared/modules/routing/abstract/routing-app.abstract';

/**
 * Apps Instance
 * @returns {ReactElement}
 */
class App extends RoutingAppAbstract {
    /**
     * Modules
     * @return {Object[]}
     */
    get modules(): Object[] {
        return [
            LifecycleRouter
        ];
    }
}

export default App;
