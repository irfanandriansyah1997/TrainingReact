import React, { ReactElement } from 'react';

import ContentRouter from './content/content.router';

/**
 * Apps Instance
 * @returns {ReactElement}
 */
function App(): ReactElement {
    return (
        <div className="App">
            <ContentRouter />
        </div>
    );
}

export default App;
