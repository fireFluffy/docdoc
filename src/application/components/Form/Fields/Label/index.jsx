// @flow
import React, { memo, useContext } from 'react';
import _ from 'lodash';

import { FieldContext } from '../../Context';
import LabelWarp from './Styles';

const Label = ({ status, children }) => {
  const { name, type } = useContext(FieldContext);

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
