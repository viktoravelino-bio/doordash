import './App.css';
import { Filter } from './components/molecules/filter/Filter';
import { ShowHeader } from './pages/ShowHeader';
import { ShowSignInModal } from './pages/ShowSignInModal';

function App() {
  return (
    <div className="App">
      {/* <ShowSignInModal /> */}

      <ShowHeader />

      <div style={{ height: '200px', backgroundColor: '#e0e0e0' }}></div>

      <Filter />

      <div style={{ height: '2000px', backgroundColor: '#e0e0e0' }}></div>
    </div>
  );
}

export default App;
