import ReactModal from 'react-modal';
import css from './ImageModal.module.css';
ReactModal.setAppElement('#root');

export default function ImageModal({ state, linkPhoto, handleIsOpen }) {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '80%',
      height: '80%',
    },
  };

  return (
    <ReactModal
      isOpen={state}
      onRequestClose={() => handleIsOpen(false)}
      onAfterOpen={() => (document.body.style.overflow = 'hidden')}
      onAfterClose={() => (document.body.style.overflow = '')}
      style={customStyles}
    >
      <img className={css.img} src={linkPhoto} alt="Modal Content" />
    </ReactModal>
  );
}
