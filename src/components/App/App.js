import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import OurPats from '../OurPats/OurPats';
import DogTraining from '../DogTraining/DogTraining';
import OurPuppies from '../OurPuppies/OurPuppies';
import Contacts from '../Contacts/Contacts';
import { Switch, withRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className='body'>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route exact path='/our-pats'>
          <OurPats />
        </Route>
        <Route exact path='/dog-training'>
          <DogTraining />
        </Route>
        <Route exact path='/our-puppies'>
          <OurPuppies />
        </Route>
        <Route exact path='/сontacts'>
          <Contacts />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);
