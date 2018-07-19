import * as React from 'react';
import axios from 'axios';

// Config
import URLs from './conf/URLs';

// Helpers
import { imagesFromFlickrAPI } from './Carousel.helpers';

class Carousel extends React.Component {
    async getData() {
        const response = await axios.get(URLs.flickrAPI);
        return imagesFromFlickrAPI(await response);
    }

    async componentDidMount() {
        console.log(await this.getData());
    }

    render() {
        return <div> carousel </div>;
    }
}

export default Carousel;
