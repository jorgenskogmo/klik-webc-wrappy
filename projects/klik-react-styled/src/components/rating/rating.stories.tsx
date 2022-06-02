import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { KlikRatingStyledComponent as Rating } from './';


export default {
  title: 'ReactStyled/KlikRatingComponent',
  component: Rating,
  argTypes: { onChange: { action: 'onChange' } },
} as ComponentMeta<typeof Rating>;


export const Usage: ComponentStory<typeof Rating> = (args) => {
  return (
    <Rating bg={'#f00'} top={'100px'} pos={'absolute'} w={'100%'} h={'24px'} {...args} />
  )
}
