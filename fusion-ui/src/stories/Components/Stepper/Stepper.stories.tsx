import type { Meta, StoryObj } from '@storybook/react';
import Stepper from './Stepper';

import {
  AiFillHome,
  AiOutlineSlack,
  AiTwotoneSetting,
  AiOutlineDropbox
} from 'react-icons/ai';

const meta = {
  component: Stepper,
  tags: ['autodocs']
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const StepperComponent: Story = {
  args: {
    stepItems: [
      {
        stepKey: 1,
        icon: <AiFillHome />,
        stepName: 'Home',
        stepContent: <h1>Stepper 1 Content</h1>
      },
      {
        stepKey: 2,
        icon: <AiOutlineSlack />,
        stepName: 'Slack Hub',
        stepContent: <h1>Stepper 2 Content</h1>
      },
      {
        stepKey: 3,
        icon: <AiTwotoneSetting />,
        stepName: 'Settings',
        stepContent: <h1>Stepper 3 Content</h1>
      },
      {
        stepKey: 4,
        icon: <AiOutlineDropbox />,
        stepName: 'Dropbox',
        stepContent: <h1>Stepper 4 Content</h1>
      }
    ],
    actionButtons: [
      {
        label: 'Next',
        variant: 'primary',
        alignment: 'right'
      },
      {
        label: 'Back',
        variant: 'secondary',
        alignment: 'right'
      },
      {
        label: 'Cancel',
        variant: 'tertiary',
        alignment: 'left'
      }
    ],
    activeStep: 1,
    enableStepnavigation: true
  }
};
