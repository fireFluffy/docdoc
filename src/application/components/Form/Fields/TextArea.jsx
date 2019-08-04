// @flow
import React, { memo, useContext } from 'react';
import { useField } from 'react-final-form-hooks';
import TextareaAutosize from 'react-textarea-autosize';
import uuid from 'uuid4';
import _ from 'lodash';

import TabsContext from '../../../context';
import Strings from '../../../utils/strings';
import type { TextAreaFieldProps } from '../../../Types';

const { PLACEHOLDER } = Strings.FORM.TEXTAREA;

const TextAreaAdapter = ({ name, label, placeholder }: TextAreaFieldProps) => {
  const { form } = useContext(TabsContext);
  const { input } = useField(name, form);

  return (
    <div className="ui form">
      {_.isString(label) && <label htmlFor={name}>{label}</label>}
      <TextareaAutosize maxRows={8} name={name} placeholder={placeholder} {...input} />
    </div>
  );
};

TextAreaAdapter.defaultProps = {
  name: uuid(),
  label: null,
  placeholder: PLACEHOLDER,
  typeField: 'textArea',
};

export default memo(TextAreaAdapter);
