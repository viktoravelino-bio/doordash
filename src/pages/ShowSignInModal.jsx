import { useState } from 'react';
import { SocialSignInModal } from '../components/organisms/socialSignInModal/SocialSignInModal';

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

      <SocialSignInModal visible={show} onClose={() => setShow(false)} />
    </div>
  );
};
