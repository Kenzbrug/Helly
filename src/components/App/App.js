import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import OurPats from '../OurPats/OurPats';
import DogTraining from '../DogTraining/DogTraining';
import OurPuppies from '../OurPuppies/OurPuppies';
import Contacts from '../Contacts/Contacts';
import Rabbits from '../Rabbits/Rabbits';
import Horses from '../Horses/Horses';
import Dogs from '../Dogs/Dogs';
import ImagePopup from '../ImagePopup/ImagePopup';
import {
  useLocation,
  Switch,
  withRouter,
  Route,
  Redirect,
} from 'react-router-dom';
import { useState } from 'react';

function App() {
  const { pathname } = useLocation();
  const [openPopupImg, setOpenPopupImg] = useState(false);
  const [selectedCard, setIsSelectedCard] = useState(undefined);

  function handleCardClick(card) {
    setOpenPopupImg(true);
    setIsSelectedCard(card);
  }

  function closePopup() {
    setIsSelectedCard(undefined);
    setOpenPopupImg(false);
  }

  return (
    <div className='body'>
      <Header location={pathname} />
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route exact path='/our-pats'>
          <OurPats />
        </Route>
        <Route exact path='/dog-training'>
          <DogTraining onCardClick={handleCardClick} />
        </Route>
        <Route exact path='/our-puppies'>
          <OurPuppies />
        </Route>
        <Route exact path='/dogs'>
          <Dogs />
        </Route>
        <Route exact path='/horses'>
          <Horses />
        </Route>
        <Route exact path='/rabbits'>
          <Rabbits />
        </Route>
        <Route exact path='/сontacts'>
          <Contacts />
        </Route>
        <Route path='*'>
          <Redirect to='/' />
        </Route>
      </Switch>
      <Footer />
      <ImagePopup
        onClose={closePopup}
        openPopupImg={openPopupImg}
        dataCard={selectedCard}
      />
    </div>
  );
}

export default withRouter(App);
