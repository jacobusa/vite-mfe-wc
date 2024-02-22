import { Meta, StoryFn } from '@storybook/react';
import React from 'react';

export const Logo = () => {
  return <div>hey</div>;
};

export default {
  title: 'Logo',
  component: Logo,
} as Meta<typeof Logo>;

const Logo1Template: StoryFn<typeof Logo> = () => (
  <div className="flex justify-center items-center w-full">
    <Logo />
  </div>
);

export const Frame = Logo1Template.bind({});
