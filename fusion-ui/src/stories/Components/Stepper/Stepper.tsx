/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import stepperType, {
  stepperItem,
  stepperStateTypes
} from './stepperTypes';
import './stepper.css';
import Button from '../Inputs/Button/Button';
import Typography from '../DataDisplay/Typography/Typography';
const Stepper: React.FC<stepperType> = ({
  stepItems,
  enableStepnavigation = false,
  enableFooterActionButtons = true,
  activeStep,
  actionButtons
}: stepperType) => {
  const ALIGNMENT = { LEFT: 'LEFT', RIGHT: 'RIGHT' };

  const BUTTON_ACTION_TYPES = {
    NEXT: 'NEXT',
    BACK: 'BACK',
    SUBMIT: 'SUBMIT'
  };

  const [stepperState, setStepperState] =
    React.useState<stepperStateTypes>({
      currentStep: activeStep ?? 1
    });

  const { currentStep } = stepperState;

  const ITEM_LIST_SIZE = stepItems.length;

  const actionButtonsHandler = (type: string) => {
    type = type.toUpperCase();
    if (BUTTON_ACTION_TYPES.NEXT === type) {
      if (currentStep < ITEM_LIST_SIZE) {
        setStepperState({
          ...stepperState,
          currentStep: currentStep + 1
          // [type]: false
        });
        return;
      }
      setStepperState({
        ...stepperState,
        currentStep: ITEM_LIST_SIZE
        // [type]: true
      });
    } else if (BUTTON_ACTION_TYPES.BACK === type) {
      if (currentStep === 1) {
        setStepperState({
          ...stepperState,
          currentStep: 1
          // [type]: true
        });
        return;
      }
      setStepperState({
        ...stepperState,
        currentStep: currentStep - 1
        // [type]: false
      });
    }
  };
  React.useEffect(() => console.log(stepperState), [stepperState]);
  const GET_ON_CLICK_HANDLER = (
    actionType: string,
    buttonActionHandler: any
  ) => {
    switch (actionType) {
      case BUTTON_ACTION_TYPES.NEXT:
        return (
          buttonActionHandler ?? actionButtonsHandler(actionType)
        );
      case BUTTON_ACTION_TYPES.BACK:
        return (
          buttonActionHandler ?? actionButtonsHandler(actionType)
        );

      default:
        return alert('Please provide custom action handler');
    }
  };

  const GET_ACTION_BUTTONS = () => {
    const leftDivButtons: any[] = [];
    const rightDivButtons: any[] = [];

    actionButtons?.filter((button) =>
      button.alignment?.toUpperCase() === ALIGNMENT.LEFT
        ? leftDivButtons.push(button)
        : rightDivButtons.push(button)
    );

    const GET_BUTTON_LEVELS = (btnName: string) =>
      btnName?.toUpperCase() === BUTTON_ACTION_TYPES.NEXT &&
      currentStep === ITEM_LIST_SIZE
        ? 'Submit'
        : btnName;

    return (
      <>
        <div
          className={`fusion-stepper-buttons--${ALIGNMENT.LEFT}-div`}
        >
          {leftDivButtons.map((button) => (
            <Button
              key={button.label}
              variant={button.variant}
              onClick={() =>
                GET_ON_CLICK_HANDLER(
                  button?.label?.toUpperCase(),
                  button.onClick
                )
              }
              disabled={
                button?.disabled &&
                stepperState[`${button?.label.toUpperCase()}`]
              }
            >
              {GET_BUTTON_LEVELS(button.label)}
            </Button>
          ))}
        </div>
        <div
          className={`fusion-stepper-buttons--${ALIGNMENT.RIGHT}-div`}
        >
          {rightDivButtons.map((button) => (
            <Button
              key={button.label}
              variant={button.variant}
              onClick={() =>
                GET_ON_CLICK_HANDLER(
                  button?.label?.toUpperCase(),
                  button.onClick
                )
              }
              disabled={
                button?.disabled
                // stepperState[`${button?.label.toUpperCase()}`]
              }
            >
              {GET_BUTTON_LEVELS(button.label)}
            </Button>
          ))}
        </div>
      </>
    );
  };

  const getBackGroundColor = (name: string, stepKey: number) => {
    switch (name) {
      case 'CIRCLE':
      case 'PROGRESS':
        if (stepKey === currentStep && name === 'CIRCLE')
          return '#3399ff';
        else if (stepKey < currentStep) return '#70b673';
        break;

      default:
        break;
    }
  };

  return (
    <div className="fusion-stepper-section">
      <div className="fusion-stepper-root">
        <div className="fusion-stepper-wrapper">
          {stepItems &&
            stepItems.map((step: stepperItem) => (
              <>
                <div className="fusion-circle-container">
                  <div
                    className="fusion-step-circle"
                    style={{
                      backgroundColor: getBackGroundColor(
                        'CIRCLE',
                        step.stepKey
                      ),
                      color:
                        step.stepKey <= currentStep
                          ? 'white'
                          : 'black'
                    }}
                    key={step.stepKey}
                    onClick={() =>
                      enableStepnavigation &&
                      setStepperState({ currentStep: step.stepKey })
                    }
                  >
                    {step.icon}
                  </div>
                  <Typography variant="heading" size="small">
                    {step?.stepName}
                  </Typography>
                </div>
                <div
                  className="fusion-progress-line"
                  style={{
                    backgroundColor: getBackGroundColor(
                      'PROGRESS',
                      step.stepKey
                    ),
                    display:
                      step.stepKey === stepItems.length
                        ? 'none'
                        : 'flex'
                  }}
                />
              </>
            ))}
        </div>
      </div>
      <div className="fusion-stepper-content">
        {stepItems[currentStep - 1]?.stepContent}
      </div>
      <div className="fusion-stepper-footer">
        {enableFooterActionButtons && GET_ACTION_BUTTONS()}
      </div>
    </div>
  );
};

export default Stepper;
