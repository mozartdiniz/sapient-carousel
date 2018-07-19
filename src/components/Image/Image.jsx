import * as React from 'react';
import * as styles from './Image.css';
import PropTypes from 'prop-types';

const Image = props => (
    <div className={styles.imageContainer}>
        <img className={styles.image} src={props.url} alt={props.title} />
    </div>
);

Image.PropTypes = {
    url: PropTypes.string,
    title: PropTypes.string
};

Image.defaultProps = {
    url: '',
    title: ''
};

export default Image;
