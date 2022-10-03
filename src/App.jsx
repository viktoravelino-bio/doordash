import logo from './logo.svg';
import './App.css';
import { Modal } from './components/molecules/modal/Modal';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setShow(true)}>Show</button>

      <Modal
        title="Sign in or Sign up"
        visible={show}
        onClose={() => setShow(false)}
      >
        <p>Modal content</p>
        <p>Modal content</p>
        <p>Modal content</p>
        <p>Modal content</p>
        <p>Modal content</p>
        <p>Modal content</p>
        <p>Modal content</p>
        <p>Modal content</p>
        <p>Modal content</p>
        <p>Modal content</p>
        <p>Modal content</p>
        <p>Modal content</p>
        <p>Modal content</p>
        <p>Modal content</p>
        <p>Modal content</p>
        <p>Modal content</p>
        <p>Modal content</p>
        <p>Modal content</p>
        <p>Modal content</p>
        <p>Modal content</p>
        <p>Modal content</p>
        <p>Modal content</p>
        <p>Modal content</p>
        <p>Modal content</p>
        <p>Modal content</p>
        <p>Modal content</p>
        <p>Modal content</p>
        <p>Modal content</p>
        <p>Modal content</p>
        <p>Modal content</p>
        <p>Modal content</p>
        <p>Modal content</p>
        <p>Modal content</p>
        <p>Modal content</p>
        <p>Modal content</p>
        <p>Modal content</p>
      </Modal>
    </div>
  );
}

export default App;
