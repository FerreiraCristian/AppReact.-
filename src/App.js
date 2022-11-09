import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
function App() {
  return (
    <div className="App">
      <main>
        <NavBar/>
        <ItemListContainer gretting={"HolaMundo"}/>
      </main>
    </div>
  );
}

export default App;
