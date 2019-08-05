import React, { memo, useContext } from 'react';
import { Label, List } from 'semantic-ui-react';
import _ from 'lodash';

import { FieldContext } from '../Context';

const RenderErrors = () => {
  const { field } = useContext(FieldContext);

  if (!field?.meta?.error || !field.meta.dirty) {
    return null;
  }

  const { error } = field.meta;

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
