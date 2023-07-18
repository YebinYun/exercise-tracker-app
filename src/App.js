import './App.css';
// import {Routes, Route} from 'react-router-dom';
// import Header from './components/Header';
// import Footer fro./components/Footerter';
// import Start from './components/Start';
import MapSearch from './pages/MapSearch';
import Exercise from './components/Exercise';

function App() {
  return (
    <>
      {/* <Header /> */}
      {/* <Routes>
        <Route path='/' element={<Start />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Main' element={<Main />}></Route>
        <Route path='/Record' element={<Record />}></Route>
        <Route path='/MapSearch' element={<MapSearch />}></Route>
        <Route path='/ExerciseList' element={<ExerciseList />}></Route>
        <Route path='/Calendar' element={<Calendar />}></Route>
        <Route path='/Setting' element={<Setting />}></Route>
      </Routes> */}
      <MapSearch />
      <Exercise />
      {/* <Footer /> */}
    </>
  );
}

export default App;
