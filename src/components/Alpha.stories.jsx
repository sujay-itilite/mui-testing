import React from 'react';

import Alpha from './Alpha';

export default {
  title: 'Example/Alpha',
  component: Alpha,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Alpha {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Alpha',
};

