import { SocialButton } from '../../atoms/socialButton/SocialButton';
import './SocialSignInButtons.scss';

export const SocialSignInButtons = ({ className, providers = {} }) => {
  const providerNames = Object.keys(providers);

  return (
    <div className={`social-signIn-buttons__container ${className}`}>
      {providerNames.map((providerName) => (
        <SocialButton
          key={providerName}
          provider={providerName}
          label={providers[providerName]?.label}
          handler={providers[providerName]?.handler}
        />
      ))}
    </div>
  );
};
