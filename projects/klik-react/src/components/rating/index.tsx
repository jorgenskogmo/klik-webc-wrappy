import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { KlikRating } from 'klik-core';


export const KlikRatingComponent = createComponent(React, 'klik-rating', KlikRating, {
  onactivate: 'activate',
  onchange: 'change',
});
