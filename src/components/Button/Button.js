import { animateScroll as scroll } from 'react-scroll';
import s from './Button.module.css';
import PropTypes from 'prop-types';

export default function Button({onClick}) {
  

  const scrollPage = () => {
    onClick();
      scroll.scrollToBottom();
  };

  
    return (
      <div className={s.ButtonDiv}>
        <button onClick={scrollPage} className={s.Button} type="button">
        Load more
      </button>
      </div>
      
    );
  }


Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    };

