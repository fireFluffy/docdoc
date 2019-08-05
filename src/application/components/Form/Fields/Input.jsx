// @flow
import React, { memo, useMemo, useContext, useEffect, useState } from 'react';
import { useField } from 'react-final-form-hooks';
import { Input } from 'semantic-ui-react';
import InputMask from 'react-input-mask';
import uuid from 'uuid4';

import Label from './Label';
import RenderErrors from '../Validate/RenderErrors';

import FormContext, { FieldContext } from '../Context';
import getMask from '../Masks';
import validateAdapter, { fieldClass } from '../Validate';
import type { InputProps, InputFieldProps } from '../../../Types';

const InputMaskWrap = memo(({ className, field, mask, name, prefix, ...props }: InputProps) => {
  const strMask = useMemo(() => getMask(mask), [mask]);
  const [stateMask, changeStateMask] = useState(null);
  useEffect(() => changeStateMask(strMask), [strMask]);

  return (
    <InputMask
      {...props}
      {...stateMask}
      alwaysShowMask
      defaultValue={field.input.value}
      onChange={field.input.onChange}
      onFocus={field.input.onFocus}
      onBlur={field.input.onBlur}>
      {inputProps => <Input {...inputProps} className={className} label={prefix} />}
    </InputMask>
  );
});

const InputWrap = memo(({ className, field, max, name, prefix, ...props }: InputProps) => {
  const interceptChange = (e, data) => {
    if (!(max < data.value.length)) {
      field.input.onChange(e, data);
    }
  };

  return (
    <Input
      {...props}
      {...field.input}
      className={className}
      label={prefix}
      onChange={interceptChange}
    />
  );
});

const InputAdapter = ({
  equal,
  label,
  mask,
  max,
  name,
  placeholder,
  prefix,
  required,
  size,
  type,
  typeField,
}: InputFieldProps) => {
  const { form, submitFailed } = useContext(FormContext);
  const validators = { equal, required };
  const optionsValidator = { equal, mask, name };
  const validateMethod = validateAdapter(label, validators, optionsValidator);
  const field = useField(name, form, validateMethod);
  const context = { field, name, label, typeField };
  const className = useMemo(() => fieldClass(field.meta, submitFailed), [field.meta, submitFailed]);

  return (
    <FieldContext.Provider value={context}>
      <Label htmlFor={name} status={className} type={type}>
        {label}
      </Label>
      {mask ? (
        <InputMaskWrap
          className={className}
          field={field}
          name={name}
          mask={mask}
          placeholder={placeholder}
          prefix={prefix}
          size={size}
          type={type}
        />
      ) : (
        <InputWrap
          className={className}
          field={field}
          name={name}
          max={max}
          placeholder={placeholder}
          prefix={prefix}
          size={size}
          type={type}
        />
      )}
      <RenderErrors />
    </FieldContext.Provider>
  );
};
InputAdapter.defaultProps = {
  equal: false,
  label: null,
  mask: null,
  max: 255,
  name: uuid(),
  placeholder: null,
  prefix: null,
  required: false,
  size: 'large',
  type: 'text',
  typeField: 'input',
};

export default memo(InputAdapter);
export { InputWrap as Input, InputMaskWrap as InputMask };
