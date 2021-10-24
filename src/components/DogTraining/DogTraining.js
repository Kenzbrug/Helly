import './DogTraining.css';
import { arrayTrainingDogsImgs } from '../../utils/constants';
import Card from '../Card/Card';

function DogTraining({ onCardClick }) {
  console.log(arrayTrainingDogsImgs);
  return (
    <section className='dog-training'>
      <ul className='dog-training__lists'>
        {arrayTrainingDogsImgs.map((trainingDogsImg) => {
          return <Card card={trainingDogsImg} onCardClick={onCardClick} key={trainingDogsImg.id} />;
        })}
      </ul>
    </section>
  );
}

export default DogTraining;
