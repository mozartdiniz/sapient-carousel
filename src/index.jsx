import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// Components
import Carousel from './Carousel';

ReactDOM.render(<Carousel />, document.getElementById('root'));
registerServiceWorker();
