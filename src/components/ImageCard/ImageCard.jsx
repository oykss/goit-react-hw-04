import css from './ImageCard.module.css';

export default function ImageCard({ linkImage, alt }) {
  return (
    <div className={css.wrap}>
      <img src={linkImage} alt={alt} />
    </div>
  );
}
