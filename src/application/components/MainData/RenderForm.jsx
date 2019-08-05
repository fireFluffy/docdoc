// @flow
import React, { memo } from 'react';
import { Button, Grid } from 'semantic-ui-react';

import InputAdapter from '../Form/Fields';
import Strings from '../../utils/strings';

const { FORM, MAIN_DATA } = Strings;
const { NAME, SURNAME, PHONE, EMAIL } = MAIN_DATA;

const RenderForm = () => (
  <>
    <Grid stackable columns={2}>
      <Grid.Column>
        <InputAdapter label={NAME.LABEL} name={NAME.NAME} placeholder={NAME.PLACEHOLDER} required />
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
        <Button primary>{FORM.BUTTONS.NEXT}</Button>
      </Grid.Column>
    </Grid>
  </>
);

export default memo(RenderForm);
