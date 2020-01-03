import React, { PureComponent } from 'react';
import styles from './index.less';

export class Index extends PureComponent {
    render() {
        return (
            <div>
                Hello World，当前环境是：<span className={styles.bgcolor}>{$ENVIRONMENT}</span>
            </div>
        );
    }
}

export default Index;
