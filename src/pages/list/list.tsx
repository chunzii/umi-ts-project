import router from 'umi/router';
import React from 'react';

export default () => {
  return (
    <div>
      <h1>list/list</h1>
      <button
        onClick={() => {
          router.goBack();
        }}
      >
        back
      </button>
    </div>
  );
};
