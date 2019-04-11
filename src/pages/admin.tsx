import React from 'react';
import { connect } from 'dva';
import Redirect from 'umi/redirect';

interface AdminProp {
  login: Array<string>;
}


function Admin(prop: AdminProp) {
  if (prop.abc) {
    return <h1>Admin Page {prop.login}</h1>;
  } else {
    return <Redirect to="/login" />;
  }
}

function mapStateToProps(state) {
  return {
    login: state.global.login,
  };
}

export default connect(mapStateToProps)(Admin);
