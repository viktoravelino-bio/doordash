import { useState } from 'react';
import { SocialSignInModal } from '../components/organisms/socialSignInModal/SocialSignInModal';

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

      <SocialSignInModal
        visible={show}
        onClose={() => setShow(false)}
        providers={providersObj}
      />
    </div>
  );
};
