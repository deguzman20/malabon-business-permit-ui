import React from 'react';

import { Image } from './Image';
import MalabonLogo from '../../../resources/images/logo.png';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Images',
  component: Image,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Image {...args} />;

export const Logo = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Logo.args = {
  src: MalabonLogo
};
