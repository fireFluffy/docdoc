// @flow
import React, { memo } from 'react';
import _ from 'lodash';

import LabelWarp from './Styles';

const Label = ({ status, children, name, type }) => {
  if (!_.isNil(children)) {
    return (
      <LabelWarp status={status} htmlFor={name} type={type}>
        {children}
      </LabelWarp>
    );
  }

  return null;
};

export default memo(Label);
