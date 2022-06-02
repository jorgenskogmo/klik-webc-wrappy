import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { KlikRatingComponent as Rating } from './';


export default {
  title: 'React/KlikRatingComponent',
  component: Rating,
  argTypes: { onChange: { action: 'onChange' } },
} as ComponentMeta<typeof Rating>;


export const Usage: ComponentStory<typeof Rating> = (args) => {

  const handleOnClick = React.useCallback( (value:any) => {
    console.log('handleOnClick', value)
  }, []);

  return (
    <Rating {...args} onChange={handleOnClick}  />
  )
}