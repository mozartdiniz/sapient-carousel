import * as React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import * as styles from './Carousel.css';

// Config
import URLs from './conf/URLs';

// Helpers
import { imagesFromFlickrAPI } from './Carousel.helpers';

// Components
import ImageGallery from './components/ImageGallery/ImageGallery';
import NavigationButton from './components/NavigationButton/NavigationButton';

class Carousel extends React.Component {
    state = {
        images: [],
        selectedImageIndex: 0
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

    goForward = () => {
        if (this.state.selectedImageIndex >= this.state.images.length) {
            return;
        }

        this.setState({
            selectedImageIndex: this.state.selectedImageIndex + 1
        });
    };

    goBackward = () => {
        if (!this.state.selectedImageIndex) {
            return;
        }

        this.setState({
            selectedImageIndex: this.state.selectedImageIndex - 1
        });
    };

    render() {
        return (
            <div>
                <div className={styles.carouselImagesContainer}>
                    <ImageGallery images={this.state.images} imageWidth={this.props.imageWidth} selectedImageIndex={this.state.selectedImageIndex} />
                </div>
                <div className={styles.carouselButtonsContainer}>
                    <NavigationButton label="Prev" direction="backward" onClickHandler={this.goBackward} />
                    <NavigationButton label="Next" direction="forward" onClickHandler={this.goForward} />
                </div>
            </div>
        );
    }
}

Carousel.propTypes = {
    imageWidth: PropTypes.number
};

Carousel.defaultProps = {
    imageWidth: 300
};

export default Carousel;
