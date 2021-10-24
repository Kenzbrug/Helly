import { useState, useEffect } from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import './Dogs.css';
import { queenYaroslavaImage } from '../../utils/constants';
// import mainQyi from '../../images/QueenYaroslava/main-qyi.jpg'

function Dogs() {
  const [filteredImages, setFilteredImages] = useState([]);
  useEffect(() => {
    setFilteredImages(queenYaroslavaImage);
  }, []);

  console.log(filteredImages);
  return (
    <section className='dogs'>
      <SRLWrapper>
        <div className='dogs-container'>
          {/* <img className='dogs-image__main' src={filteredImages[0].img} alt={filteredImages[0].name} /> */}
          <div className='dogs-images__container'>
            {filteredImages.map((image) => (
              <div key={image.id} className='dogs-images__image-card'>
                <a href={image.img}>
                  <img className='dogs-images__image' src={image.img} alt={image.name} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </SRLWrapper>
    </section>
  );
}

export default Dogs;
