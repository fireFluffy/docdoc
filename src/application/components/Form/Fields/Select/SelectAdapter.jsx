// @flow
import React, { memo } from 'react';
import { Field } from 'react-final-form';
import uuid from 'uuid4';

import DefaultSelect from './DefaultSelect';
import { FieldContext } from '../../Context';
import Strings from '../../../../utils/strings';

const { PLACEHOLDER } = Strings.FORM.SELECT;

const SelectAdapter = fieldProps => {
  const { label, name, options, placeholder, search, size, typeField } = fieldProps;

  return (
    <Field
      name={name}
      render={({ input }) => {
        const { onBlur, onChange, onFocus, value } = input;
        const context = {
          label,
          name,
          onBlur,
          onChange,
          onFocus,
          options,
          placeholder,
          search,
          size,
          typeField,
          value,
        };

        return (
          <FieldContext.Provider value={context}>
            <DefaultSelect />
          </FieldContext.Provider>
        );
      }}
    />
  );
};

SelectAdapter.defaultProps = {
  name: uuid(),
  label: null,
  options: [],
  placeholder: PLACEHOLDER,
  search: true,
  size: 'large',
  typeField: 'select',
};

export default memo(SelectAdapter);
