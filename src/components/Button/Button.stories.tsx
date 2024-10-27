import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import CustomButton from './Button';

export default {
  title: 'Example/CustomButton',
  component: CustomButton,
} as Meta<typeof CustomButton>;

const Template: StoryFn<typeof CustomButton> = (args) => <CustomButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Secondary Button',
  color: 'secondary',
};


export const A = Template.bind({});
Secondary.args = {
  label: 'Secondary sdfsdf',
  color: 'secondary',
};
