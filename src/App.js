import Slider from './components/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'bootstrap';
import img1 from './components/images/first.jpeg';
import img2 from './components/images/second.jpeg';
import img3 from './components/images/third.jpeg';

function App() {
  // const images = [
  //   { id: 1, image: img1 },
  //   { id: 2, image: img2 },
  //   { id: 3, image: img3 },
  // ];

  const imagesArr = [img1, img2, img3];

  return <Slider images={imagesArr} />;
}

export default App;
