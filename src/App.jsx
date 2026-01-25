import { Route, Routes } from 'react-router-dom';
import { Home } from './screens/Home';
import { Success } from './screens/Success';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}

export default App;
