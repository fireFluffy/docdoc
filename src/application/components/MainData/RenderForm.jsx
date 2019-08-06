// @flow
import React, { memo, useContext, useEffect } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import _ from 'lodash';

import { InputAdapter } from '../Form/Fields';
import Strings from '../../utils/strings';

import TabsContext from '../../context';
import FormContext from '../Form/Context';

const { FORM, MAIN_DATA } = Strings;
const { NAME, SURNAME, PHONE, EMAIL } = MAIN_DATA;

const RenderForm = ({ form, handleSubmit, submitFailed, valid, values }) => {
  const { formState, updateFormState, updateIsValid } = useContext(TabsContext);
  const context = { change: form.change, submitFailed, values };

  useEffect(() => {
    updateIsValid(valid);
  }, [updateIsValid, valid]);

  // Unmount Component
  useEffect(
    () => () => {
      const objForm = _.assign(formState, values);
      updateFormState(objForm);
    },
    [formState, updateFormState, values]
  );

  return (
    <FormContext.Provider value={context}>
      <form onSubmit={handleSubmit}>
        <Grid stackable columns={2}>
          <Grid.Column>
            <InputAdapter
              label={NAME.LABEL}
              name={NAME.NAME}
              placeholder={NAME.PLACEHOLDER}
              required
            />
          </Grid.Column>
          <Grid.Column>
            <InputAdapter
              label={SURNAME.LABEL}
              name={SURNAME.NAME}
              placeholder={SURNAME.PLACEHOLDER}
              required
            />
          </Grid.Column>
        </Grid>
        <Grid stackable columns={1}>
          <Grid.Column>
            <InputAdapter
              label={PHONE.LABEL}
              mask={PHONE.MASK}
              name={PHONE.NAME}
              placeholder={PHONE.PLACEHOLDER}
              prefix={PHONE.PREFIX}
              required
            />
          </Grid.Column>
          <Grid.Column>
            <InputAdapter
              label={EMAIL.LABEL}
              name={EMAIL.NAME}
              placeholder={EMAIL.PLACEHOLDER}
              required
            />
          </Grid.Column>
          <Grid.Column>
            <Button type="submit" primary>
              {FORM.BUTTONS.NEXT}
            </Button>
          </Grid.Column>
        </Grid>
        <pre>{JSON.stringify(values, 0, 2)}</pre>
      </form>
    </FormContext.Provider>
  );
};

export default memo(RenderForm);
