import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './components/Searchbar/Searchbar'
import ImageGalleryInfo from './components/ImageGalleryInfo/ImagesGalleryInfo'


export default function App() {
const [imageName, setImageName] = useState('')
  
  
  
    return (
      <>
        <Searchbar onSubmit={setImageName} />

        <ImageGalleryInfo imageName={imageName} />
        <ToastContainer autoClose={3000} />
      </>
    );
  }
