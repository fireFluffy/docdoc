// @flow
import React, { memo, useContext, useEffect, useMemo, useState } from 'react';
import InputMask from 'react-input-mask';
import _ from 'lodash';

import DefaultInput from './DefaultInput';
import FormContext, { FieldContext } from '../../Context';
import getMask from '../../Masks';

function InputMaskWrapper(props = {}) {
  const { change } = useContext(FormContext);
  const { mask, name, onBlur, onFocus, value } = useContext(FieldContext);
  const strMask = useMemo(() => getMask(mask), [mask]);
  const [stateMask, changeStateMask] = useState(null);
  const onCustomChange = e => {
    const targetVal = e.target.value.replace(stateMask.replace, '');
    const newValue = _.isEmpty(targetVal) ? undefined : targetVal;

    change(name, newValue);
  };

  useEffect(() => changeStateMask(strMask), [strMask]);

  return (
    <InputMask
      alwaysShowMask
      defaultValue={value}
      onChange={onCustomChange}
      onFocus={onFocus}
      onBlur={onBlur}
      {...stateMask?.mask}
      {...props}>
      {inputProps => <DefaultInput {...inputProps} />}
    </InputMask>
  );
}

export default memo(InputMaskWrapper);
