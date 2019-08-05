// @flow

const fieldClass = (meta, submitFailed) => {
  const valid = meta?.valid;
  const modified = meta?.modified;

  if (!valid && (modified || submitFailed)) {
    return 'error';
  }

  if (valid && modified) {
    return 'success';
  }

  return null;
};

export default fieldClass;
