import { connect } from 'dva';
import React from 'react';
import router from 'umi/router';
import Link from 'umi/link';
import styles from './index.css';

function App(props) {
  return (
    <div className={styles.normal}>
      <h2>
        {props.text} @ {props.pathname}
      </h2>
      <Link to="/list/search">go to Search</Link>
      <div
        onClick={() => {
          router.goBack();
        }}
      >
        Back
      </div>
      <div>
        test: {props.a} | {props.b}
      </div>
    </div>
  );
}

export default connect(state => {
  return {
    pathname: state.routing.location.pathname,
    text: state.global.text,
    a: state.a,
    b: state.b,
  };
})(App);
