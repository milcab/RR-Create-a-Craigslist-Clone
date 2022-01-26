// Import data

// Import components
import './App.css';
import Directory from './components/Directory/Directory';
import Gallery from './components/Gallery/Gallery';
import Searchbar from './components/Searchbar/Searchbar';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        <Searchbar />
        <Directory />
        <Gallery />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
