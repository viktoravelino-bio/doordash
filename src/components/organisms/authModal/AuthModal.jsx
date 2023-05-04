/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import './AuthModal.scss';

import { FormControl } from '../../atoms/formControl/FormControl';
import { Divider } from '../../atoms/divider/Divider';
import { SocialSignInButtons } from '../../molecules/socialSignInButtons/SocialSignInButtons';
import { AuthModalContainer } from '../../molecules/authModalContainer/AuthModalContainer';
import { ReactComponent as PersonOnLaptop } from '../../../assets/imgs/person-laptop.svg';

const TABS = {
  SIGN_IN: 'SIGN_IN',
  SIGN_UP: 'SIGN_UP',
  FORGOT_PASSWORD: 'FORGOT_PASSWORD',
};

export function AuthModal({
  isOpen,
  onClose,
  signIngHandler,
  signUpHandler,
  forgotPasswordHandler,
  providers,
}) {
  const [selectedTab, setSelectedTab] = useState(TABS.SIGN_IN);

  function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formType = form.name;

    // retrieve all fields value from the form. (helps to avoid using state and reducing number of re-renders)
    const fields = [...form.querySelectorAll('input')].reduce((acc, field) => {
      return { ...acc, [field.name]: field.value };
    }, {});

    if (formType === 'signIn') {
      signIngHandler(fields);
    } else if (formType === 'signUp') {
      signUpHandler(fields);
    } else if (formType === 'forgotPassword') {
      forgotPasswordHandler(fields);
    }
  }

  function renderSocialSignInButtons(className = '') {
    return <SocialSignInButtons className={className} providers={providers} />;
  }

  function renderModeSelector() {
    return (
      <div className="auth-modal__mode-selector">
        <button
          className={`${selectedTab === TABS.SIGN_IN ? 'selected' : ''}`}
          onClick={() => setSelectedTab(TABS.SIGN_IN)}
        >
          Sign In
        </button>
        <button
          className={`${selectedTab === TABS.SIGN_UP ? 'selected' : ''}`}
          onClick={() => setSelectedTab(TABS.SIGN_UP)}
        >
          Sign Up
        </button>
      </div>
    );
  }

  function renderSignInForm() {
    return (
      <div className="auth-modal__form__container">
        {renderSocialSignInButtons('auth-modal__signIn-form__social')}

        <Divider label="or" />

        {renderModeSelector()}

        <form
          className="auth-modal__signIn__form"
          onSubmit={handleFormSubmit}
          name="signIn"
        >
          <FormControl name="email" label="Email" type="email" />

          <FormControl name="password" label="Password" type="password" />

          <a onClick={() => setSelectedTab(TABS.FORGOT_PASSWORD)}>
            Forgot your password?
          </a>

          <button type="submit">Sign In</button>
        </form>
      </div>
    );
  }

  function renderSignUpForm() {
    return (
      <div className="auth-modal__form__container">
        {renderModeSelector()}

        <form
          className="auth-modal__signUp__form"
          onSubmit={handleFormSubmit}
          name="signUp"
        >
          <div className="form__row">
            <FormControl name="firstName" label="First Name" type="text" />
            <FormControl name="lastName" label="Last Name" type="text" />
          </div>

          <FormControl name="email" label="Email" type="email" />

          <div className="form__row">
            <FormControl
              name="numberCountryCode"
              label="Country"
              type="number"
              className="prefix-number"
            />
            <FormControl
              name="phoneNumber"
              label="Mobile Number"
              type="number"
            />
          </div>

          <FormControl
            name="password"
            label="Password"
            type="password"
            auxText="At least 8 characters"
          />

          <button type="submit">Sign Up</button>
        </form>

        <Divider label="or" />

        {renderSocialSignInButtons('auth-modal__signUp-form__social')}
      </div>
    );
  }

  function renderForgotPassword() {
    return (
      <div className="auth-modal__form__container forgot-password">
        <div>
          <h2>Forgot Password?</h2>
          <PersonOnLaptop className="svg" />
          <p>
            Please specify your email address to receive instructions for
            resetting it. If an account exists by that email, we will send a
            password reset
          </p>
        </div>
        <form name="forgotPassword" onSubmit={handleFormSubmit}>
          <FormControl name="email" label="Email" type="email" />
          <button type="submit">Submit</button>
          <button type="button" onClick={() => setSelectedTab(TABS.SIGN_IN)}>
            Back to Sign In
          </button>
        </form>
      </div>
    );
  }

  return (
    <AuthModalContainer
      isOpen={isOpen}
      headerTitle="Sign In or Sign Up"
      onClose={onClose}
    >
      {selectedTab === TABS.SIGN_IN && renderSignInForm()}
      {selectedTab === TABS.SIGN_UP && renderSignUpForm()}
      {selectedTab === TABS.FORGOT_PASSWORD && renderForgotPassword()}
    </AuthModalContainer>
  );
}
