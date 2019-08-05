// @flow

const fieldClass = meta => {
  const valid = meta?.valid;
  const modified = meta?.modified;

  if (!valid && modified) {
    return 'error';
  }

  if (valid && modified) {
    return 'success';
  }

  return null;
};

export default fieldClass;
