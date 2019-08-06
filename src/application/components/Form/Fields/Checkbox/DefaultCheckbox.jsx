// @flow
import React, { memo, useContext } from 'react';
import { Checkbox } from 'semantic-ui-react';

import FormContext, { FieldContext } from '../../Context';

const DefaultCheckbox = (selectProps = {}) => {
  const { change, values } = useContext(FormContext);
  const { label, name, value } = useContext(FieldContext);
  const onCustomChange = () => {
    change(name, value || label);
  };

  return (
    <>
      <Checkbox
        checked={label === values[name]}
        name={name}
        radio
        label={label}
        value={value || label}
        onChange={onCustomChange}
        {...selectProps}
      />
    </>
  );
};

export default memo(DefaultCheckbox);
