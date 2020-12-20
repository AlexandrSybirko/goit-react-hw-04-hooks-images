import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './ImageLoader.module.css'

export default function ImageLoader() {
  
 
    return (
      <Loader className={s.Loader} type="Audio" color="#00BFFF" height={80} width={80}
        
      />
    );
  }


