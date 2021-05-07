import './ImagePopup.css';
import cheevi from '../../images/DogTraining/1.jpg';

function ImagePopup({ onClose, openPopupImg, dataCard }) {
  //   console.log(dataCard.img);
  return (
    <div className={`popup ${openPopupImg ? 'popup_open' : ''}`}>
      <div className='popup__open-image'>
        <button
          className='popup__close-button'
          type='button'
          aria-label='кнопка закрыть'
          onClick={onClose}
        ></button>
        <img
          className='popup__image'
          src={dataCard ? dataCard.img : undefined}
        />
      </div>
    </div>
  );
}

export default ImagePopup;

{
  /* <div className={`popup popup_${name} ${card && "popup_open"}`}>
            <div className="popup__open-image">
                <button className="popup__close-button" type="button" aria-label="кнопка сохранить" onClick={onClose}></button>
                <form className="popup__form popup__container-image">
                    <img className="popup__image" src={card ? card.link : undefined} alt={card ? card.name : undefined} />
                    <figcaption className="popup__image-title">{card ? card.name : undefined}</figcaption>
                </form>
            </div>
</div> */
}
