import './App.css';
import ImageSlider from './componet/ImageSlider/ImageSlider';
import Ratings from './componet/StarRating/StarRatings';

function App() {
  return (
    <div className="App">
      <Ratings noOfStars ={10} />
      <ImageSlider url={'https://picsum.photos/v2/list'} limit={'10'} page={'1'}/> 
    </div>
  );
}

export default App;
