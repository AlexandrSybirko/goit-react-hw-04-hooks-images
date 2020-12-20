import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryErrorView from '../ImageGalleryErrorView/ImageGalleryErrorView';
import ImageLoader from '../ImageLoader/ImageLoader';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import imagesAPI from '../services/images-api';


const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function ImagesGalleryInfo({ imageName }) {
  const [images, setImages] = useState([])
  const [error, setError] = useState(null)
  const [status, setStatus] = useState(Status.IDLE)
  const [page, setPage] = useState(1)

  
  useEffect(() => {
    if (!imageName) {
      return;
    }
    
    setStatus(Status.PENDING);

    imagesAPI.fetchImages(imageName, page)
      .then(images => {
        setImages(images)
        setStatus(Status.RESOLVED)
        })
      .catch(error => {
        setError(error)
      setStatus(Status.REJECTED)
        });
    
 }, [imageName, page])

 
  const onClickLoadMore = () => {
    setPage (page + 1)
        
    };
 
    if (status === Status.IDLE) {
      return <p>enter your request</p>;
    }

    if (status === Status.PENDING) {
      return <ImageLoader />;
    }

    if (status === Status.REJECTED) {
      return <ImageGalleryErrorView message={error.message} />;
    }

    if (status === Status.RESOLVED) {
      return (
        <>
          <ImageGallery images={images.hits} />

          {images.length > 12 && (<Button onClick={onClickLoadMore} />)}
          </>
      );
    }
  }


ImagesGalleryInfo.propTypes = {
  imageName: PropTypes.string.isRequired,
};



