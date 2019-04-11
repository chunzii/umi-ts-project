import React from 'react';
import styles from './index.css';
import { formatMessage } from 'umi-plugin-locale';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.tsx</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            {formatMessage({ id: 'index.start' })}
          </a>
          <br/>
          <DefaultButton
            text='Login'
            primary={ true }
            href='/login'
          />
        </li>
      </ul>
    </div>
  );
}
