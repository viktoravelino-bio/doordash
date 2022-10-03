import './SocialSignInModal.scss';
import { Modal } from '../../molecules/modal/Modal';
import { Divider } from '../../atoms/divider/Divider';
import { SocialSignInButtons } from '../../molecules/socialSignInButtons/SocialSignInButtons';
import { FormControl } from '../../atoms/formControl/FormControl';
import { Button } from '../../atoms/button/Button';
import { useState } from 'react';

export const SocialSignInModal = ({ visible, onClose }) => {
  const [selectedTab, setSelectedTab] = useState('signIn');

  function handleFormSignIn(e) {
    e.preventDefault();
  }

  const renderSignInForm = () => {
    return (
      <div className="modal-signIn__container">
        <SocialSignInButtons
          className="modal-signIn__social"
          providers={{
            google: {
              label: 'Continue with Google',
              handler: () => console.log('signIn Google'),
            },
            facebook: {
              label: 'Continue with Facebook',
              handler: () => console.log('signIn Facebook'),
            },
            twitter: {
              label: 'Continue with Twitter',
              handler: () => console.log('signIn Twitter'),
            },
          }}
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

          <Button type="submit">Sign In</Button>
        </form>
      </div>
    );
  };

  const renderSignUpForm = () => {
    return (
      <div className="modal-signIn__container">
        <SocialSignInButtons
          className="modal-signIn__social"
          providers={{
            google: {
              label: 'Continue with Google',
              handler: () => console.log('signIn Google'),
            },
            facebook: {
              label: 'Continue with Facebook',
              handler: () => console.log('signIn Facebook'),
            },
            twitter: {
              label: 'Continue with Twitter',
              handler: () => console.log('signIn Twitter'),
            },
          }}
        />

        <Divider
          label="or continue with email"
          className="modal-signIn__divider"
        />

        <form className="modal-signIn__form" onSubmit={handleFormSignIn}>
          <FormControl label="Email" type="email" />
          <FormControl label="Password" type="password" />

          <Button type="submit">Sign In</Button>
        </form>
      </div>
    );
  };

  return (
    <Modal visible={visible} onClose={onClose} title="Sign In or Sign Out">
      {renderSignInForm()}
    </Modal>
  );
};
