
import { useState } from 'react';
import s from './ImageGalleryItem.module.css'
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal'

export default function ImageGalleryItem({ src, alt, largeImageUrl }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  
    

    return (
      <li className={s.ImageGalleryItem}>
        <img
          onClick={toggleModal}
          src={src}
          alt={alt}
          className={s.ImageGalleryItemImage}
        />
        {showModal && (
          <Modal onClose={toggleModal} src={largeImageUrl} alt={alt} />
        )}
      </li>
    );
  }


ImageGalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    largeImageUrl: PropTypes.string.isRequired,
  };

