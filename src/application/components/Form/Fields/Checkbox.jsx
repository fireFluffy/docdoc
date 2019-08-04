// @flow
import React, { memo, useContext } from 'react';
import { Checkbox } from 'semantic-ui-react';
import uuid from 'uuid4';

import TabsContext from '../../../context';
import type { CheckboxFieldProps } from '../../../Types';

const CheckboxAdapter = ({ label, value, name }: CheckboxFieldProps) => {
  const {
    form: { change },
    values,
  } = useContext(TabsContext);
  const changeField = (e, field) => change(name, field.value);

  return (
    <Checkbox
      checked={label === values[name]}
      name={name}
      radio
      label={label}
      value={value || label}
      onChange={changeField}
    />
  );
};

CheckboxAdapter.defaultProps = {
  name: uuid(),
  label: null,
  typeField: 'radio',
};

export default memo(CheckboxAdapter);
