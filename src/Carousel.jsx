import * as React from 'react';
import axios from 'axios';
import * as styles from './Carousel.css';
// Config
import URLs from './conf/URLs';

// Helpers
import { imagesFromFlickrAPI } from './Carousel.helpers';

// Components
import { ImageGallery } from './components/ImageGallery/ImageGallery';

class Carousel extends React.Component {
    state = {
        images: []
    };

    async getData() {
        const response = await axios.get(URLs.flickrAPI);
        return imagesFromFlickrAPI(await response);
    }

    async componentDidMount() {
        this.setState({
            images: await this.getData()
        });
    }

    render() {
        return (
            <div className={styles.carousel}>
                <ImageGallery images={this.state.images} />
            </div>
        );
    }
}

export default Carousel;
