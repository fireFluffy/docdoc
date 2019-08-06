// @flow
import React, { memo } from 'react';
import { Field } from 'react-final-form';
import uuid from 'uuid4';

import DefaultCheckbox from './DefaultCheckbox';
import { FieldContext } from '../../Context';

const CheckboxAdapter = fieldProps => {
  const { label, name, typeField, value } = fieldProps;

  return (
    <Field
      name={name}
      render={({ input }) => {
        const context = {
          label,
          name,
          typeField,
          value,
        };

        return (
          <FieldContext.Provider value={context}>
            <DefaultCheckbox />
          </FieldContext.Provider>
        );
      }}
    />
  );
};

CheckboxAdapter.defaultProps = {
  name: uuid(),
  label: null,
  typeField: 'radio',
  value: null,
};

export default memo(CheckboxAdapter);
