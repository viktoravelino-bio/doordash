import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { PickupMapPage } from './pages/PickupMapPage';
import { StorePage } from './pages/StorePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="store/:id" element={<StorePage />} />
      <Route path="pickup" element={<PickupMapPage />} />

      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default App;
