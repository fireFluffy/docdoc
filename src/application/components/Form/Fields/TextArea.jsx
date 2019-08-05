// @flow
import React, { memo, useContext } from 'react';
import { useField } from 'react-final-form-hooks';
import TextArea from 'react-textarea-autosize';
import uuid from 'uuid4';
import _ from 'lodash';

import FormContext, { FieldContext } from '../Context';
import Strings from '../../../utils/strings';
import type { TextAreaFieldProps } from '../../../Types';

const { PLACEHOLDER } = Strings.FORM.TEXTAREA;

const TextAreaAdapter = ({ name, label, placeholder, typeField }: TextAreaFieldProps) => {
  const { form } = useContext(FormContext);
  const field = useField(name, form);
  const context = { field, name, label, typeField };

  return (
    <FieldContext.Provider value={context}>
      <div className="ui form">
        {_.isString(label) && <label htmlFor={name}>{label}</label>}
        <TextArea maxRows={8} name={name} placeholder={placeholder} {...field.input} />
      </div>
    </FieldContext.Provider>
  );
};

TextAreaAdapter.defaultProps = {
  name: uuid(),
  label: null,
  placeholder: PLACEHOLDER,
  typeField: 'textArea',
};

export default memo(TextAreaAdapter);
