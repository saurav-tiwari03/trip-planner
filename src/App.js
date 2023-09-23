import { useState } from 'react';
import Tour from './components/tour';
import data from './data'

function App() {
  const [tours,setTours] = useState(data);
  function removeTour(id) {
    const newTour = tours.filter(tour => tour.id !== id);  
    setTours(newTour);
  }
  if(tours.length === 0) {
    return (
      <div className='refresh'> 
        <h2>No Trips Left</h2>
        <button className='btn-white' onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    )
  }
  return (
    
    <div className="App">
      <Tour tours={tours} removeTour={removeTour}></Tour>
    </div>
  );
}

export default App;
