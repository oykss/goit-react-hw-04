import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ handlePage }) {
  return (
    <div className={css.wrap}>
      <button type="button" onClick={() => handlePage(prev => prev + 1)}>
        Load More
      </button>
    </div>
  );
}
