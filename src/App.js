import './App.css';
import TopNavbar from './components/TopNavbar';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="App">
      <TopNavbar />
      <div className="app-container">
        <MainContent />
      </div>
    </div>
  );
}

export default App;
