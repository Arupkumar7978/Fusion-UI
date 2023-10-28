import React from 'react';
import ComponentDemoTypes from './DemoTypes';
import './demo.css';
import Stepper from '../Stepper/Stepper';
import {
  AiFillHome,
  AiOutlineSlack,
  AiTwotoneSetting,
  AiOutlineDropbox
} from 'react-icons/ai';
const Demo: React.FC<ComponentDemoTypes> = () => {
  const [currentStep, setcurrentStep] = React.useState(1);
  return (
    <div className="fusion-component-container">
      <div className="fusion-demo-box">
        <Stepper
          stepItems={[
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
          ]}
          activeStep={currentStep}
          enableStepnavigation={true}
          actionButtons={[
            {
              label: 'Next',
              variant: 'primary',
              alignment: 'right',
              onClick: () => {
                setcurrentStep(currentStep + 1);
                console.log('Next Triggered');
              }
            },
            {
              label: 'Back',
              variant: 'secondary',
              alignment: 'right',
              onClick: () => {
                setcurrentStep(currentStep - 1);
                console.log('Back Triggered');
              }
            },
            {
              label: 'Cancel',
              variant: 'tertiary',
              alignment: 'left',
              onClick: () => {
                console.log('Cancel Triggered');
              }
            },
            {
              label: 'Skip',
              variant: 'secondary',
              alignment: 'right'
            }
          ]}
        />
      </div>
    </div>
  );
};

export default Demo;
