import React, { useState } from 'react';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import '../Form/Form.scss';
import Button from '../../../Button/Button';

const Signup = () => {
  const [formState, setFormState] = useState({
    step: 1,
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    title: '',
    sex: '',
    weight: '',
    dob: '',
    phone: '',
    addressNumber: '',
    street: '',
    city: '',
    country: '',
    postcode: '',
    //need to be an array?
    condition: '',
    conditionStartDate: '',
    conditionComment: '',
    allergy: '',
    severity: '',
    medication: '',
    dosage: '',
    bloodType: '',
    //Doctor states
    licence: '',
    accreditation: '',
    specialtyField: '',
    subSpecialtyField: '',
    education: '',
    yearsExp: '',
    language: '',
  });

  const onNext = () => {
    setFormState({
      ...formState,
      step: formState.step + 1,
    });
  };

  const onPrev = () => {
    setFormState({
      ...formState,
      step: formState.step - 1,
    });
  };

  const onValueChange = (e, key) => {
    setFormState({
      ...formState,
      [key]: e.target.value,
    });
  };

  const displayFormStep = () => {
    switch (formState.step) {
      case 1:
        return (
          <div className="form-wrapper">
            <div className="trim" />
            <div className="form-container">
              <div className="form-header">
                <h1>Sign up</h1>
                <span>1/3</span>
              </div>
              <StepOne formState={formState} onValueChange={onValueChange} />
              <Button action="Next" color="pink" onClick={onNext} />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="form-wrapper">
            <div className="trim" />
            <div className="form-container">
              <div className="form-header">
                <h1>Sign up</h1>
                <span>2/3</span>
              </div>

              <StepTwo formState={formState} onValueChange={onValueChange} />
              <Button action="Next" color="pink" onClick={onNext} />
              <Button action="Previous" color="pink" onClick={onPrev} />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="form-wrapper">
            <div className="trim" />
            <div className="form-container">
              <div className="form-header">
                <h1>Sign up</h1>
                <span>3/3</span>
              </div>

              <StepThree formState={formState} onValueChange={onValueChange} />
              <Button action="Previous" color="pink" onClick={onPrev} />
            </div>
          </div>
        );
    }
  };

  return displayFormStep();
};

export default Signup;