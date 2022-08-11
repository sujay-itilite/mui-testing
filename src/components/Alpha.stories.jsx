import React from 'react';

import Alpha from './Alpha';

export default {
  title: 'Example/Alpha',
  component: Alpha,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};


const Template = (args) => <div>
                            <Alpha {...args} />
                            hello world
                          </div>;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Alpha',
};

