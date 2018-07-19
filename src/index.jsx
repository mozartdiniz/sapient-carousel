import * as React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// Components
import Page from './Page.jsx';

ReactDOM.render(<Page />, document.getElementById('root'));
registerServiceWorker();
