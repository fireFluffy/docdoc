// @flow
import React, { memo, useContext } from 'react';
import { useField } from 'react-final-form-hooks';
import { Checkbox } from 'semantic-ui-react';
import uuid from 'uuid4';

import FormContext, { FieldContext } from '../Context';
import type { CheckboxFieldProps } from '../../../Types';

const CheckboxAdapter = ({ label, value, name, typeField }: CheckboxFieldProps) => {
  const { form, values } = useContext(FormContext);
  const field = useField(name, form);
  const context = { field, name, label, typeField };
  const changeField = (e, fieldObj) => form.change(name, fieldObj.value);

  return (
    <FieldContext.Provider value={context}>
      <Checkbox
        checked={label === values[name]}
        name={name}
        radio
        label={label}
        value={value || label}
        onChange={changeField}
      />
    </FieldContext.Provider>
  );
};

CheckboxAdapter.defaultProps = {
  name: uuid(),
  label: null,
  typeField: 'radio',
};

export default memo(CheckboxAdapter);
