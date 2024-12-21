import css from './ImageCard.module.css';

export default function ImageCard({
  urls: { small, regular },
  alt,
  handleIsOpen,
}) {
  return (
    <div className={css.wrap}>
      <img src={small} alt={alt} onClick={() => handleIsOpen(regular)} />
    </div>
  );
}
