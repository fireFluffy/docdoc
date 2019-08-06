// @flow
import React, { memo } from 'react';
import { Field } from 'react-final-form';
import uuid from 'uuid4';

import InputWrapper from './InputWrapper';
import { FieldContext } from '../../Context';

const InputAdapter = fieldProps => {
  const { label, mask, name, placeholder, prefix, type, typeField } = fieldProps;

  return (
    <Field
      name={name}
      type={type}
      render={({ input }) => {
        const { onBlur, onChange, onFocus, value } = input;
        const context = {
          label,
          mask,
          name,
          onBlur,
          onChange,
          onFocus,
          placeholder,
          prefix,
          type,
          typeField,
          value,
        };

        return (
          <FieldContext.Provider value={context}>
            <InputWrapper />
          </FieldContext.Provider>
        );
      }}
    />
  );
};

InputAdapter.defaultProps = {
  label: null,
  mask: null,
  name: uuid(),
  placeholder: null,
  prefix: null,
  type: 'text',
  typeField: 'input',
};

export default memo(InputAdapter);
