import './App.css';
import Header from './Header';
import Cards from './Cards'
import SwipeButtons from './SwipeButtons' 

function App() {
  return (
    <div className="app">

      {/* Header */}
      <Header />
      {/* Tinder Cards */}
      <Cards />
      {/* Swipe Buttons */}
      <SwipeButtons />
    </div>
  );
}

export default App;
