import './ImagePopup.css';

function ImagePopup({ onClose, openPopupImg, dataCard }) {
  // console.log(dataCard.img);
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
          alt={dataCard ? dataCard.name : undefined}
        />
      </div>
    </div>
  );
}

export default ImagePopup;
