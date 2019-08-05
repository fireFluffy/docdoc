// @flow
import React, { memo } from 'react';
import AnimateHeight from 'react-animate-height';
import { Button, Grid } from 'semantic-ui-react';

import InputAdapter, { CheckboxAdapter, SelectAdapter, TextAreaAdapter } from '../Form/Fields';
import Strings from '../../utils/strings';

const { ADDRESS, FORM } = Strings;

const RenderForm = ({ height }: string | number) => (
  <>
    <Grid stackable columns={1}>
      <Grid.Column>
        <div>
          <CheckboxAdapter name={ADDRESS.DELIVERY.NAME} label={ADDRESS.DELIVERY.LABEL[0]} />
        </div>
        <div>
          <CheckboxAdapter name={ADDRESS.DELIVERY.NAME} label={ADDRESS.DELIVERY.LABEL[1]} />
        </div>
      </Grid.Column>
    </Grid>
    <div className="animate-block">
      <AnimateHeight duration={500} height={height}>
        <Grid stackable columns={3}>
          <Grid.Column>
            <SelectAdapter
              name={ADDRESS.COUNTRY.NAME}
              options={ADDRESS.COUNTRY.ITEMS}
              label={ADDRESS.COUNTRY.LABEL}
            />
          </Grid.Column>
          <Grid.Column>
            <InputAdapter name={ADDRESS.CITY.NAME} label={ADDRESS.CITY.LABEL} />
          </Grid.Column>
          <Grid.Column>
            <InputAdapter name={ADDRESS.ZIP.NAME} label={ADDRESS.ZIP.LABEL} />
          </Grid.Column>
        </Grid>
        <Grid stackable columns={1}>
          <Grid.Column>
            <InputAdapter name={ADDRESS.ADDRESS.NAME} label={ADDRESS.ADDRESS.LABEL} />
          </Grid.Column>
          <Grid.Column>
            <InputAdapter
              name={ADDRESS.DATE_DELIVERY.NAME}
              label={ADDRESS.DATE_DELIVERY.LABEL}
              mask="date"
            />
          </Grid.Column>
        </Grid>
      </AnimateHeight>
    </div>
    <Grid stackable columns={1}>
      <Grid.Column>
        <TextAreaAdapter name={ADDRESS.DESCRIPTION.NAME} label={ADDRESS.DESCRIPTION.LABEL} />
      </Grid.Column>
      <Grid.Column>
        <Button primary>{FORM.BUTTONS.SUBMIT}</Button>
      </Grid.Column>
    </Grid>
  </>
);

export default memo(RenderForm);
