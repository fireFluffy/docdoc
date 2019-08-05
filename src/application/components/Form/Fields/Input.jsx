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
    <InputMask {...props} onChange={field.input.onChange} {...stateMask}>
      {inputProps => <Input className={className} {...inputProps} label={prefix} />}
    </InputMask>
  );
});

const InputWrap = memo(({ className, field, name, prefix, ...props }: InputProps) => (
  <Input className={className} {...props} {...field.input} label={prefix} />
));

const InputAdapter = ({
  name,
  label,
  mask,
  placeholder,
  prefix,
  required,
  size,
  type,
  typeField,
}: InputFieldProps) => {
  const { form } = useContext(FormContext);
  const validators = { required };
  const validateMethod = validateAdapter(label, validators);
  const field = useField(name, form, validateMethod);
  const context = { field, name, label, typeField };
  const className = useMemo(() => fieldClass(field.meta), [field.meta]);

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
  name: uuid(),
  label: null,
  mask: null,
  placeholder: null,
  prefix: null,
  required: false,
  size: 'large',
  type: 'text',
  typeField: 'input',
};

export default memo(InputAdapter);
export { InputWrap as Input, InputMaskWrap as InputMask };
