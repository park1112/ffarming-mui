import { Step, StepLabel, Stepper } from '@mui/material';
import React from 'react';

export default function CheckoutWizard({ activeStep = 0 }) {
  return (
    <Stepper activeStep={activeStep} alternativeLabel>
      {['로그인', '주소입력', '결제 수단 선택', '결제하기'].map((step) => (
        <Step key={step}>
          <StepLabel>{step}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
