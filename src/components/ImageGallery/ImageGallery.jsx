import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export default function ImageGallery({ photos, handleIsOpen }) {
  return (
    <ul className={css.list}>
      {photos.map(({ urls: { small, regular }, alt_description }, id) => (
        <li className={css.item} key={id} onClick={() => handleIsOpen(regular)}>
          <ImageCard linkImage={small} alt={alt_description} />
        </li>
      ))}
    </ul>
  );
}
