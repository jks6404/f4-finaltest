import './App.css';
import {Routes, Route} from 'react-router-dom'
import HomePage from './Components/HomePage';
import DetailsPage from './Components/DetailsPage';
import myImage from './images/myImage.png';

function App() {
  return (
    <div className="App">
      <nav>
        <h1>TravelMedia.in</h1>
        <img src={myImage} alt='MyImage' />
      </nav>
    

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/item/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;