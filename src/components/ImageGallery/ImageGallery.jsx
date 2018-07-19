import * as React from 'react';
import PropTypes from 'prop-types';

import * as styles from './ImageGallery.css';

// Components
import Image from '../Image/Image';

// Helpers
import { imageGaleryStyles } from './ImageGallery.helpers';

const ImageGallery = props => (
    <div style={imageGaleryStyles(props.images.length, props.imageWidth, props.selectedImageIndex)} className={styles.imageGallery}>
        {props.images.map(image => <Image key={image.id} url={image.url} title={image.title} imageWidth={props.imageWidth} />)}
    </div>
);

ImageGallery.propTypes = {
    images: PropTypes.array,
    imageWidth: PropTypes.number,
    selectedImageIndex: PropTypes.number
};

ImageGallery.defaultProps = {
    images: [],
    imageWidth: 0,
    selectedImageIndex: 0
};

export default ImageGallery;
