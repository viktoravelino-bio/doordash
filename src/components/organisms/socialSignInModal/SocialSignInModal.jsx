import './SocialSignInModal.scss';
import { Modal } from '../../molecules/modal/Modal';
import { Divider } from '../../atoms/divider/Divider';
import { SocialSignInButtons } from '../../molecules/socialSignInButtons/SocialSignInButtons';
import { FormControl } from '../../atoms/formControl/FormControl';
import { Button } from '../../atoms/button/Button';
import { useState } from 'react';

export const SocialSignInModal = ({
  visible,
  onClose,
  providers,
  onSignIn,
  onSignUp,
  forgotPasswordHref = '#',
  onForgotPassword,
}) => {
  const [selectedTab, setSelectedTab] = useState('signIn');

  function handleFormSignIn(e) {
    e.preventDefault();
    onSignIn();
  }
  function handleFormSignUp(e) {
    e.preventDefault();
    onSignUp();
  }

  const renderSignInForm = () => {
    return (
      <div className="modal-signIn__container">
        <SocialSignInButtons
          className="modal-signIn__social"
          providers={providers}
        />

        <Divider
          label="or continue with email"
          className="modal-signIn__divider"
        />

        <div className="modal-signIn__selector">
          <button
            className={`${selectedTab === 'signIn' ? 'selected' : ''}`}
            onClick={() => setSelectedTab('signIn')}
          >
            Sign In
          </button>
          <button
            className={`${selectedTab === 'signUp' ? 'selected' : ''}`}
            onClick={() => setSelectedTab('signUp')}
          >
            Sign Up
          </button>
        </div>

        <form className="modal-signIn__form" onSubmit={handleFormSignIn}>
          <FormControl label="Email" type="email" />
          <FormControl label="Password" type="password" />
          <a href={forgotPasswordHref} className="forgot-password-link">
            Forgot your password?
          </a>

          <Button type="submit">Sign In</Button>
        </form>
      </div>
    );
  };

  const renderSignUpForm = () => {
    return (
      <div className="modal-signIn__container signUp">
        <div className="modal-signIn__selector">
          <button
            className={`${selectedTab === 'signIn' ? 'selected' : ''}`}
            onClick={() => setSelectedTab('signIn')}
          >
            Sign In
          </button>
          <button
            className={`${selectedTab === 'signUp' ? 'selected' : ''}`}
            onClick={() => setSelectedTab('signUp')}
          >
            Sign Up
          </button>
        </div>

        <form className="modal-signUp__form" onSubmit={handleFormSignUp}>
          <div className="modal-signUp__form__row">
            <FormControl label="First Name" type="text" />
            <FormControl label="Last Name" type="text" />
          </div>

          <FormControl label="Email" type="email" />

          <div className="modal-signUp__form__row">
            <FormControl
              label="Country"
              type="number"
              className="prefix-number"
            />
            <FormControl label="Mobile Number" type="number" />
          </div>

          <FormControl
            label="Password"
            type="password"
            auxText="At least 8 characters"
          />

          <Button type="submit">Sign Up</Button>
        </form>

        <Divider label="or" className="modal-signUp__divider" />

        <SocialSignInButtons
          className="modal-signIn__social"
          providers={providers}
        />
      </div>
    );
  };

  return (
    <Modal visible={visible} onClose={onClose} title="Sign In or Sign Out">
      {selectedTab === 'signIn' ? renderSignInForm() : renderSignUpForm()}
    </Modal>
  );
};
