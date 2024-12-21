import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export default function ImageGallery({ photos, handleIsOpen }) {
  return (
    <ul className={css.list}>
      {photos.map(({ urls: { small, regular }, alt_description }, id) => (
        <li className={css.item} key={id}>
          <ImageCard
            urls={{ small, regular }}
            alt={alt_description}
            handleIsOpen={handleIsOpen}
          />
        </li>
      ))}
    </ul>
  );
}
