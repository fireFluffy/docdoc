// @flow
import React, { memo, useContext } from 'react';
import { Field } from 'react-final-form';
import uuid from 'uuid4';

import InputWrapper from './InputWrapper';
import RenderErrors from '../../Validate/RenderErrors';
import FormContext, { FieldContext } from '../../Context';
import validateAdapter from '../../Validate';
import fieldClass from '../../Validate/FieldClass';

const InputAdapter = fieldProps => {
  const { submitFailed } = useContext(FormContext);
  const { label, mask, name, placeholder, prefix, required, type, typeField } = fieldProps;
  const validateContext = { label, validators: { required }, options: { label, name, required } };

  return (
    <Field
      name={name}
      type={type}
      validate={validateAdapter.bind(validateContext)}
      render={({ input, meta }) => {
        const { onBlur, onChange, onFocus, value } = input;
        const fieldClassName = fieldClass(meta, submitFailed);
        const context = {
          fieldClassName,
          label,
          mask,
          meta,
          name,
          onBlur,
          onChange,
          onFocus,
          placeholder,
          prefix,
          required,
          type,
          typeField,
          value,
        };

        return (
          <FieldContext.Provider value={context}>
            <InputWrapper />
            <RenderErrors />
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
  required: false,
  type: 'text',
  typeField: 'input',
};

export default memo(InputAdapter);
