import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import Button from '../../Inputs/Button/Button';
import Typography from '../../DataDisplay/Typography/Typography';

const meta = {
  component: Modal,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Modal_V1: Story = {
  args: {
    headerConfig: {
      title: 'Alert !',
      description:
        'Anyone who has the access will be able to view this.',
      hideCloseIcon: true
    },
    children: (
      <Typography variant="body" size="medium">
        Sorry ! You don't have permission to open this file.
      </Typography>
    ),
    open: true,
    footerContent: (
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button children={'close'} />
      </div>
    ),
    modalType: 'warning'
  }
};
