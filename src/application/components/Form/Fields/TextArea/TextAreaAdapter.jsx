// @flow
import React, { memo } from 'react';
import { Field } from 'react-final-form';
import uuid from 'uuid4';

import DefaultTextArea from './DefaultTextArea';
import { FieldContext } from '../../Context';
import Strings from '../../../../utils/strings';

const { PLACEHOLDER } = Strings.FORM.TEXTAREA;

const TextAreaAdapter = fieldProps => {
  const { maxRows, name, label, placeholder, typeField } = fieldProps;

  return (
    <Field
      name={name}
      render={({ input }) => {
        const { onBlur, onChange, onFocus, value } = input;
        const context = {
          label,
          maxRows,
          name,
          onBlur,
          onChange,
          onFocus,
          placeholder,
          typeField,
          value,
        };

        return (
          <FieldContext.Provider value={context}>
            <DefaultTextArea />
          </FieldContext.Provider>
        );
      }}
    />
  );
};

TextAreaAdapter.defaultProps = {
  label: null,
  maxRows: 8,
  name: uuid(),
  placeholder: PLACEHOLDER,
  typeField: 'textArea',
};

export default memo(TextAreaAdapter);
