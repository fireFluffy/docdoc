// @flow
import React, { memo, useContext } from 'react';
import { Input } from 'semantic-ui-react';

import { FieldContext } from '../../Context';

const DefaultInput = (inputProps = {}) => {
  const { type, onBlur, onChange, onFocus, placeholder, prefix } = useContext(FieldContext);

  return (
    <Input
      label={prefix}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      placeholder={placeholder}
      type={type}
      {...inputProps}
    />
  );
};

export default memo(DefaultInput);
