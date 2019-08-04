// @flow

export type InputProps = {
  mask?: string,
};

export type InputFieldProps = {|
  name?: string,
  label?: string,
  mask?: string,
  type?: string,
|};

export type CheckboxFieldProps = {|
  name?: string,
  label?: null,
  type?: string,
  value: ?string,
|};

export type TextAreaFieldProps = {|
  name?: string,
  label?: null,
|};
