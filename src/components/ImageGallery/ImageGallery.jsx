import * as React from 'react';
import * as styles from './ImageGallery.css';
import PropTypes from 'prop-types';

// Components
import Image from '../Image/Image';

// Helpers
import { calculateContainerWidth } from './ImageGallery.helpers';

const ImageGallery = props => (
    <div style={calculateContainerWidth(props.images.length, props.imageWidth)} className={styles.imageGallery}>
        {props.images.map(image => <Image key={image.id} url={image.url} title={image.title} imageWidth={props.imageWidth} />)}
    </div>
);

ImageGallery.propTypes = {
    images: PropTypes.array,
    imageWidth: PropTypes.number
};

ImageGallery.defaultProps = {
    images: [],
    imageWidth: 0
};

export default ImageGallery;
