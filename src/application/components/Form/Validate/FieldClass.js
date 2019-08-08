// @flow

const fieldClass = (meta, submitFailed) => {
  const { active, modified, valid } = meta;

  if (!active && !valid && (modified || submitFailed)) {
    return 'error';
  }

  if (valid && modified) {
    return 'success';
  }

  return null;
};

export default fieldClass;
