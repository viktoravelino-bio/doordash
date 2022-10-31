import { FacebookIcon, GoogleIcon, TwitterIcon } from '../../../assets/icons';
import './SocialButton.scss';

const PROVIDER_ICON_MAP = {
  google: GoogleIcon,
  facebook: FacebookIcon,
  twitter: TwitterIcon,
};

export const SocialButton = ({
  provider,
  icon = null,
  className,
  children,
  handler,
  label,
  ...rest
}) => {
  const Icon = icon || PROVIDER_ICON_MAP[provider];

  return (
    <button className={`social-button ${provider}`} onClick={handler} {...rest}>
      <Icon width={24} height={24} fill="currentColor" />

      <span>{label}</span>
    </button>
  );
};
