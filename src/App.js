
//*Import react-router
import { Route, Routes } from 'react-router';
//*Pages
import Homepage from './pages/Homepage';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about_me' element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;

