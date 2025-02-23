import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import MovieCard from './MovieCard';

// Import images from assets
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import image4 from '../assets/images/image4.jpg';
import image5 from '../assets/images/image5.jpg';

const images = [image1, image2, image3, image4, image5];

function MovieCarousel({ movies, addToWatchlist }) {
  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop interval={3000}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
}

export default MovieCarousel;