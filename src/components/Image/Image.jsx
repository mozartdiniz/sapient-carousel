import * as React from 'react';
import * as styles from './Image.css';

export const Image = props => (
    <div className={styles.imageContainer}>
        <img className={styles.image} src={props.url} alt={props.title} />
    </div>
);
