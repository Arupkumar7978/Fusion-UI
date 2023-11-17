import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import Button from '../../Inputs/Button/Button';
import Typography from '../../DataDisplay/Typography/Typography';
import { TextField } from '../../Inputs/TextField/TextField';
import { FaCopy } from 'react-icons/fa';

const meta = {
  component: Modal,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Warning: Story = {
  args: {
    headerConfig: {
      title: 'Warning !',
      description:
        'Anyone who has the access will be able to view this.',
      hideCloseIcon: false
    },
    children: (
      <Typography variant="body" size="medium">
        Sorry ! You don't have permission to open this file.
      </Typography>
    ),
    open: true,
    footerContent: (
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button children={'close'} variant="secondary" />
      </div>
    ),
    modalType: 'warning'
  }
};
export const Info: Story = {
  args: {
    headerConfig: {
      title: 'Info',
      description:
        'Anyone who has the access will be able to view this.',
      hideCloseIcon: false
    },
    children: (
      <div
        style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          gap: '1rem'
        }}
      >
        <TextField  variant="standard" label={''} />
        <Button setIcon={{ icon: <FaCopy /> }} />
      </div>
    ),
    open: true,
    footerContent: (
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '0.25rem'
        }}
      >
        <Button children={'OK'} variant="primary" />
      </div>
    ),
    modalType: 'info'
  }
};
export const Confirmation: Story = {
  args: {
    headerConfig: {
      title: 'Confirm',
      description:
        'Anyone who has the access will be able to view this.',
      hideCloseIcon: false
    },
    children: (
      <Typography variant="body" size="medium">
        Are you sure you want to download this file ?
      </Typography>
    ),
    open: true,
    footerContent: (
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '0.25rem'
        }}
      >
        <Button children={'close'} variant="secondary" />
        <Button children={'Proceed'} variant="primary" />
      </div>
    ),
    modalType: 'confirm'
  }
};

export const Error: Story = {
  args: {
    headerConfig: {
      title: 'Error',
      description:
        'Anyone who has the access will be able to view this.',
      hideCloseIcon: false
    },
    children: (
      <Typography variant="body" size="medium">
        Ooppsss... !! You can not do this.
      </Typography>
    ),
    open: true,
    footerContent: (
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '0.25rem'
        }}
      >
        <Button children={'close'} variant="secondary" error />
      </div>
    ),
    modalType: 'error'
  }
};
export const Custom: Story = {
  args: {
    headerConfig: {
      title: 'Custom',
      hideCloseIcon: false
    },
    children: (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }}
      >
        <Typography variant="display" size="small">
          Ooppsss... !! We haven't configured the custom Modal Icon
          yet.
        </Typography>
        <Typography variant="heading" size="small">
          Show Your Creativity !!
        </Typography>
      </div>
    ),
    open: true,
    footerContent: (
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '0.25rem'
        }}
      >
        <Button children={'close'} variant="secondary" />
      </div>
    ),
    modalType: 'custom'
  }
};
