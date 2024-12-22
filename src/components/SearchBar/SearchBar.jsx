import toast, { Toaster } from 'react-hot-toast';
import { CiSearch } from 'react-icons/ci';

import css from './SearchBar.module.css';
import clsx from 'clsx';

export default function SearchBar({ modalIsOpen, setQuery }) {
  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.search.value.trim();

    query ? setQuery(query) : toast.error("This didn't work.");
  };

  return (
    <header className={clsx(css.header, { [css.headerDisabled]: modalIsOpen })}>
      <Toaster position="top-right" reverseOrder={false} />
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          disabled={modalIsOpen}
        />
        <button type="submit" disabled={modalIsOpen}>
          <CiSearch className={css.icon} />
        </button>
      </form>
    </header>
  );
}
