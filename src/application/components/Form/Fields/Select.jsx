// @flow
import React, { memo, useContext } from 'react';
import { useField } from 'react-final-form-hooks';
import { Dropdown } from 'semantic-ui-react';
import uuid from 'uuid4';
import _ from 'lodash';

import FormContext, { FieldContext } from '../Context';
import Strings from '../../../utils/strings';

const { PLACEHOLDER } = Strings.FORM.SELECT;

const SelectAdapter = ({ label, name, options, placeholder, search, size, typeField }) => {
  const { form } = useContext(FormContext);
  const field = useField(name, form);
  const context = { field, name, label, typeField };
  const onChange = (e, { value }) => field.input.onChange(value);

  return (
    <FieldContext.Provider value={context}>
      {_.isString(label) && <label htmlFor={name}>{label}</label>}
      <Dropdown
        className="select-size"
        fluid
        placeholder={placeholder}
        search
        selection
        size={size}
        name={name}
        options={options}
        {...field.input}
        onChange={onChange}
      />
    </FieldContext.Provider>
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
