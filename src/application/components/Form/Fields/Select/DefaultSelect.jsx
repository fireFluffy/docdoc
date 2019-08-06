// @flow
import React, { memo, useContext } from 'react';
import { Dropdown } from 'semantic-ui-react';

import Label from '../Label';
import { FieldContext } from '../../Context';

const DefaultSelect = (selectProps = {}) => {
  const { label, onBlur, onChange, onFocus, options, placeholder, size, value } = useContext(
    FieldContext
  );
  const onCustomChange = (e, data) => onChange(data.value);

  return (
    <>
      <Label>{label}</Label>
      <Dropdown
        className="select-size"
        defaultValue={value}
        fluid
        placeholder={placeholder}
        search
        selection
        size={size}
        onBlur={onBlur}
        onChange={onCustomChange}
        onFocus={onFocus}
        options={options}
        {...selectProps}
      />
    </>
  );
};

export default memo(DefaultSelect);
