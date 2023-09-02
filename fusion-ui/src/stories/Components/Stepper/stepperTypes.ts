import React from 'react';
import ButtonProps from '../Inputs/Button/buttonTypes';

export type stepperItem = {
  stepKey: number;
  icon?: React.ReactElement | JSX.Element | null;
  stepName: string;
  stepContent: React.ReactElement | JSX.Element | string | null;
};

interface stepperButtonProps extends ButtonProps {
  alignment?: string;
}

export default interface stepperType {
  stepItems: Array<stepperItem>;
  actionButtons?: Array<stepperButtonProps>;
  enableStepnavigation?: boolean;
  enableFooterActionButtons?: boolean;
  activeStep: number;
}

export interface stepperStateTypes {
  currentStep: number;
  [key: string]: boolean | string | number | null;
}
