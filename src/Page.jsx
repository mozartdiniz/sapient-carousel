import * as React from 'react';

import * as styles from './styles.css';

// Components
import Carousel from './components/Carousel/Carousel';

class Page extends React.Component {
    render() {
        return (
            <div>
                <div className={styles.pageHeaders}>Carousel Test</div>
                <Carousel width={400} />
            </div>
        );
    }
}

export default Page;
