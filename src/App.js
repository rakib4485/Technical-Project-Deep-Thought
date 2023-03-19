import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import HeroBanner from './components/HeroBanner/HeroBanner';
import AllService from './components/ServiceCard/AllService';
import LeftNav from './components/LeftNav/LeftNav';
import BottomIcons from './components/BottomIcons/BottomIcons';
import RightNav from './components/RightNav/RightNav';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="">
      <Navbar />
      <div className='flex mt-24'>
      <div>
      <LeftNav/>
      </div>
      <div>
      <Header/>
      <HeroBanner/>
      <AllService/>
      </div>
      <div>
        <RightNav/>
        <BottomIcons/>
      </div>
      </div>
      <Toaster/>
    </div>
  );
}

export default App;
