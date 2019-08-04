// @flow
import React, { memo, useContext } from 'react';
import { useField } from 'react-final-form-hooks';
import { TextArea } from 'semantic-ui-react';
import uuid from 'uuid4';
import _ from 'lodash';

import TabsContext from '../../../context';
import type { TextAreaFieldProps } from '../../../Types';

const TextAreaAdapter = ({ name, label }: TextAreaFieldProps) => {
  const { form } = useContext(TabsContext);
  const { input } = useField(name, form);

  return (
    <div className="ui form">
      {_.isString(label) && <label htmlFor={name}>{label}</label>}
      <TextArea name={name} {...input} />
    </div>
  );
};

TextAreaAdapter.defaultProps = {
  name: uuid(),
  label: null,
  typeField: 'textArea',
};

export default memo(TextAreaAdapter);
