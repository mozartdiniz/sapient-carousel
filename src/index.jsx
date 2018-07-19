import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// Components
import Carousel from './components/Carousel/Carousel';

ReactDOM.render(<Carousel width={400} />, document.getElementById('root'));
registerServiceWorker();
