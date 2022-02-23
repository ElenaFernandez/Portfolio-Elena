import '../styles/App.scss';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import { Switch, Route } from 'react-router-dom';
import Study from './Study';
import Contact from './Contact';
import Job from './Job';
import Project from './Project';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Header />
          <Main />
        </Route>
        <Route path="/study" exact>
          <Header />
          <Study />
        </Route><Route path="/job" exact>
          <Header />
          <Job/>
        </Route>
        <Route path="/project" exact>
          <Header />
          <Project/>
        </Route>
        <Route path="/contact" exact>
          <Header />
          <Contact />
        </Route>
        <Footer />
      </Switch>
    </div>
  );
}

export default App;
