import { useState } from 'react';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css'
import PropTypes from 'prop-types';

export default function Searchbar({onSubmit}) {
  const [imageName, setImageName] = useState('')

   
  const handleChange = e => {
    
    setImageName(e.currentTarget.value.toLowerCase())
  }

  const handleSubmit = e => {
    
    e.preventDefault();
    if (imageName.trim() === '') {
      toast.info('NO DATA.');
      return
    }
    onSubmit(imageName);

    setImageName('');
    
  }    
  
  
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
           <span className={s.SearchFormButtonLabel}>Search</span>
          </button>
            <input
            value={imageName}
            onChange={handleChange}
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />             
        </form>
      </header>
    )
  }



  Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
