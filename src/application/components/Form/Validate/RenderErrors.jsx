import React, { memo, useContext } from 'react';
import { Label, List } from 'semantic-ui-react';
import _ from 'lodash';

import formContext, { FieldContext } from '../Context';

const RenderErrors = () => {
  const { submitFailed } = useContext(formContext);
  const { meta } = useContext(FieldContext);

  if (meta?.valid || meta?.active || (!meta?.modified && !submitFailed)) {
    return null;
  }

  const { error } = meta;

  return (
    <div className="validate">
      <Label basic color="red" pointing>
        <List as="ol">
          {_.keys(error).map(err => (
            <List.Item key={err} as="li" value="*">
              {error[err]}
            </List.Item>
          ))}
        </List>
      </Label>
    </div>
  );
};

export default memo(RenderErrors);
