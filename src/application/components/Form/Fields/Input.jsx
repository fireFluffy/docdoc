// @flow
import React, { memo, useMemo, useContext, useEffect, useState } from 'react';
import { useField } from 'react-final-form-hooks';
import { Input } from 'semantic-ui-react';
import InputMask from 'react-input-mask';
import uuid from 'uuid4';
import _ from 'lodash';

import TabsContext from '../../../context';
import getMask from '../Masks';
import type { InputProps, InputFieldProps } from '../../../Types';

const InputMaskWrap = memo(({ field, mask, name, ...props }: InputProps) => {
  const strMask = useMemo(() => getMask(mask), [mask]);
  const [stateMask, changeStateMask] = useState(null);
  useEffect(() => changeStateMask(strMask), [strMask]);

  return (
    <InputMask {...props} onChange={field.input.onChange} alwaysShowMask {...stateMask}>
      {inputProps => <Input {...inputProps} />}
    </InputMask>
  );
});

const InputWrap = memo(({ field, name, ...props }: InputProps) => (
  <Input {...props} {...field.input} />
));

const InputAdapter = ({ name, label, mask, placeholder, type }: InputFieldProps) => {
  const { form } = useContext(TabsContext);
  const field = useField(name, form);

  return (
    <>
      {_.isString(label) && (
        <label htmlFor={name} type={type}>
          {label}
        </label>
      )}
      {mask ? (
        <InputMaskWrap
          field={field}
          name={name}
          mask={mask}
          placeholder={placeholder}
          type={type}
        />
      ) : (
        <InputWrap field={field} name={name} placeholder={placeholder} type={type} />
      )}
    </>
  );
};
InputAdapter.defaultProps = {
  name: uuid(),
  label: null,
  mask: null,
  placeholder: null,
  type: 'text',
  typeField: 'input',
};

export default memo(InputAdapter);
export { InputWrap as Input, InputMaskWrap as InputMask };
