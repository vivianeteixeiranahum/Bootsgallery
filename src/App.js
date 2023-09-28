import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <h1>Home</h1>
        </Route>
        <Route path="/aquarela">
          <h1>Aquarela</h1>
        </Route>
        <Route path="/pixel">
          <h1>Pixel Arts</h1>
        </Route>
        <Route path="/pics">
          <h1>Fotogtafias</h1>
        </Route>
      </Switch>
      <h1>Hi</h1>
      <Footer />
    </Router>
  );
}

export default App;
