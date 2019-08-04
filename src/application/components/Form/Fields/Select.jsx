// @flow
import React, { memo, useContext } from 'react';
import { useField } from 'react-final-form-hooks';
import { Dropdown } from 'semantic-ui-react';
import uuid from 'uuid4';
import _ from 'lodash';

import TabsContext from '../../../context';
import Strings from '../../../utils/strings';

const { PLACEHOLDER } = Strings.FORM.SELECT;

const SelectAdapter = ({ label, name, options, placeholder, search }) => {
  const { form } = useContext(TabsContext);
  const { input } = useField(name, form);
  const onChange = (e, { value }) => input.onChange(value);

  return (
    <>
      {_.isString(label) && <label htmlFor={name}>{label}</label>}
      <Dropdown
        fluid
        placeholder={placeholder}
        search
        selection
        name={name}
        options={options}
        {...input}
        onChange={onChange}
      />
    </>
  );
};

SelectAdapter.defaultProps = {
  name: uuid(),
  label: null,
  options: [],
  search: true,
  placeholder: PLACEHOLDER,
  typeField: 'select',
};

export default memo(SelectAdapter);
