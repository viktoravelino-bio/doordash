import './AddressSelection.scss';

export const AddressSelection = ({ className }) => {
  return (
    <div className={`address-selection__container ${className}`}>
      <button>ASAP</button>
      <span>to</span>
      <button>33 Orchard View Blvd</button>
    </div>
  );
};
