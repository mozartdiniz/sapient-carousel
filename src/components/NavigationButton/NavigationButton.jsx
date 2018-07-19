import * as React from 'react';
import PropTypes from 'prop-types';

import * as styles from './NavigationButton.css';

// Helpers
import { getClassNames } from './NavigationButton.helpers';

const NavigationButton = props => (
    <button className={getClassNames(props.direction, styles)} onClick={props.onClickHandler}>
        {props.label}
    </button>
);

NavigationButton.prototype = {
    label: PropTypes.string,
    // forward or backward
    direction: PropTypes.string,
    onClickHandler: PropTypes.func
};

NavigationButton.defaultProps = {
    label: 'Next',
    direction: 'forward',
    onClickHandler: null
};

export default NavigationButton;
