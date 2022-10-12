import { useState } from 'react';
import { AuthModal } from '../components/organisms/authModal/AuthModal';
// import { SocialSignInModal } from '../components/organisms/socialSignInModal/SocialSignInModal';

const providersObj = {
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
};

export const ShowSignInModal = () => {
  const [show, setShow] = useState(false);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <button onClick={() => setShow(true)}>Open SignIn Modal</button>

      <AuthModal
        isOpen={show}
        onClose={() => setShow(false)}
        signIngHandler={(data) => console.log('onSignIn Triggered: ', data)}
        signUpHandler={(data) => console.log('onSignUp Triggered: ', data)}
        forgotPasswordHandler={(data) =>
          console.log('forgotPassword Triggered: ', data)
        }
        providers={{
          google: {
            label: 'Continue with Google',
            handler: () => console.log('signIn Google'),
          },
          facebook: {
            label: 'Continue with Facebook',
            handler: () => console.log('signIn Facebook'),
          },
        }}
      />
    </div>
  );
};
