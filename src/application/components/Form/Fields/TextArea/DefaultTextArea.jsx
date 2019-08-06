// @flow
import React, { memo, useContext } from 'react';
import TextArea from 'react-textarea-autosize';

import Label from '../Label';
import { FieldContext } from '../../Context';

const DefaultTextArea = (textAreaProps = {}) => {
  const { label, maxRows, onBlur, onChange, onFocus, placeholder } = useContext(FieldContext);

  return (
    <>
      <Label>{label}</Label>
      <div className="ui form">
        <TextArea
          maxRows={maxRows}
          placeholder={placeholder}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          {...textAreaProps}
        />
      </div>
    </>
  );
};

export default memo(DefaultTextArea);
