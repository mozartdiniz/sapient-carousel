import * as React from 'react';
import * as styles from './Image.css';
import PropTypes from 'prop-types';

// Helpers
import { calculateImageStyles } from './Image.helpers';

const Image = props => (
    <div className={styles.imageContainer} style={calculateImageStyles(props.imageWidth)}>
        <img className={styles.image} src={props.url} alt={props.title} />
    </div>
);

Image.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
    imageWidth: PropTypes.number
};

Image.defaultProps = {
    url: '',
    title: '',
    imageWidth: 0
};

export default Image;
