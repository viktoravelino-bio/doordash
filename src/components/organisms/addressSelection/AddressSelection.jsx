import { useState } from 'react';
import { CloseOutlinedIcon } from '../../../assets/icons';
import { classNames } from '../../../lib/classNames';
import { IconButton } from '../../atoms/iconButton/IconButton';
import { Modal } from '../../atoms/modal/Modal';
import { Portal } from '../../atoms/portal/Portal';
import { TabPill } from '../../atoms/tabPill/TabPill';
import './AddressSelection.scss';

const DAY = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const TAB_DAYS = Array.from({ length: 5 }, (_, i) => {
  const date = new Date();
  date.setDate(date.getDate() + i);
  return {
    label:
      i === 0
        ? 'TODAY'
        : i === 1
        ? 'TMR'
        : DAY[date.getDay()].slice(0, 3).toUpperCase(),
    value: date.getDate(),
  };
});

export const AddressSelection = ({ className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(TAB_DAYS[0].value);
  const [deliveryTypeSelected, setDeliveryTypeSelected] = useState('asap');

  function handleTabChange(value) {
    setSelectedTab(value);
  }

  return (
    <div className={classNames('address-selection__container', className)}>
      <button onClick={() => setIsModalOpen(true)}>ASAP</button>
      <span>to</span>
      <button onClick={() => setIsAddressModalOpen(true)}>
        33 Orchard View Blvd
      </button>

      <Portal>
        <Modal
          visible={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          fullScreen
          className={classNames('address-selection__delivery-modal')}
        >
          <Modal.Header>
            <IconButton
              icon={CloseOutlinedIcon}
              onClick={() => setIsModalOpen(false)}
            />
          </Modal.Header>

          <Modal.Body>
            <h3>Select a Delivery Date</h3>
            <TabPill className="address-selection__tab-pill">
              {TAB_DAYS.map((tab) => (
                <TabPill.Item
                  key={tab.label}
                  value={tab.value}
                  selectedTab={selectedTab}
                  setSelectedTab={handleTabChange}
                >
                  <span className="label">{tab.label}</span>
                  <span className="value">{tab.value}</span>
                </TabPill.Item>
              ))}
            </TabPill>

            <h3>Desired Delivery Time</h3>
            <TabPill className="address-selection__delivery-type">
              <TabPill.Item
                value="asap"
                selectedTab={deliveryTypeSelected}
                setSelectedTab={setDeliveryTypeSelected}
              >
                As soon as possible
              </TabPill.Item>
              <TabPill.Item
                value="scheduled"
                selectedTab={deliveryTypeSelected}
                setSelectedTab={setDeliveryTypeSelected}
              >
                Schedule for later
              </TabPill.Item>
            </TabPill>
          </Modal.Body>
        </Modal>

        <Modal
          visible={isAddressModalOpen}
          onClose={() => setIsAddressModalOpen(false)}
          fullScreen
          className={classNames('address-selection__address-modal')}
        >
          <Modal.Header>
            <IconButton
              icon={CloseOutlinedIcon}
              onClick={() => setIsAddressModalOpen(false)}
            />
          </Modal.Header>

          <Modal.Body>
            <h3>Enter Your Address</h3>
          </Modal.Body>
        </Modal>
      </Portal>
    </div>
  );
};
