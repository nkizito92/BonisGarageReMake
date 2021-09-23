import { Route, Switch } from 'react-router-dom'
import Navbar from './headers/Navbar'
import Home from './components/Home'
import './App.css';
import './css/style.css'

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <Navbar />
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={() => <Home />} />
        </Switch>
      </main>
      <footer>
        Copy Right
      </footer>
    </div>
  );
}

export default App;
