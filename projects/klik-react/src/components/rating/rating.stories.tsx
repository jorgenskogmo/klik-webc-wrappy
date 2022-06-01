import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { KlikRatingComponent as Rating } from './';


export default {
  title: 'React/KlikRatingComponent',
  component: Rating,
  
} as ComponentMeta<typeof Rating>;


export const Usage: ComponentStory<typeof Rating> = (args) => {
  return (
    <Rating {...args} />
  )
}