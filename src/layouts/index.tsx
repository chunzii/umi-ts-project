import React from 'react';
import withRouter from 'umi/withRouter';
import { connect } from 'dva';

import styles from './index.css';

function mapStateToProps(state) {
  return {
    text: state.global.text,
  };
}


export type BasicLayoutComponent<P> = React.SFC<P>;

export interface BasicLayoutProps extends React.Props<any> {
  history?: History;
  location?: Location;
}

const BasicLayout: BasicLayoutComponent<BasicLayoutProps> = props => {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to umi! {props.text} </h1>
      { props.children }
    </div>
  );
};

export default withRouter(connect(mapStateToProps)(BasicLayout));