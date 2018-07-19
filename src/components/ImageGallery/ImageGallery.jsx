import * as React from 'react';
import * as styles from './ImageGallery.css';

// Components
import { Image } from '../Image/Image';

// Helpers
import { calculateContainerWidth } from './ImageGallery.helpers';

export const ImageGallery = props => (
    <div style={calculateContainerWidth(props.images.length)} className={styles.imageGallery}>
        {props.images.map(image => <Image key={image.id} url={image.url} title={image.title} />)}
    </div>
);
