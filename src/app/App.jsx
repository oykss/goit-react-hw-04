import { useEffect, useRef, useState } from 'react';

import getPhotos from '../components/lib/api_handler';
import css from './App.module.css';

import SearchBar from '../components/SearchBar/SearchBar';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import Loader from '../components/Loader/Loader';
import ImageModal from '../components/ImageModal/ImageModal';
import LoadMoreBtn from '../components/LoadMoreBtn/LoadMoreBtn';

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [dataModal, setDataModal] = useState('');
  const [page, setPage] = useState(1);
  const totalPage = useRef(null);

  useEffect(() => {
    if (!search) return;

    setLoading(true);
    setError(false);

    const fetchPhotos = async () => {
      try {
        const response = await getPhotos(search, page);

        if (page === 1) totalPage.current = response.total_pages;

        setPhotos(prev => [...prev, ...response.results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, [search, page]);

  const setQuery = query => {
    if (query === search) return;
    setPage(1);
    totalPage.current = null;
    setPhotos([]);
    setSearch(query);
  };

  const openModalWithImage = linkPhoto => {
    setIsOpen(true);
    setDataModal(linkPhoto);
  };

  return (
    <>
      <SearchBar modalIsOpen={modalIsOpen} setQuery={setQuery} />
      <div className={css.container}>
        {photos && (
          <ImageGallery photos={photos} handleIsOpen={openModalWithImage} />
        )}
        {loading && <Loader />}
        {error && <ErrorMessage />}
        {totalPage.current > page && <LoadMoreBtn handlePage={setPage} />}
        <ImageModal
          state={modalIsOpen}
          linkPhoto={dataModal}
          handleIsOpen={setIsOpen}
        />
      </div>
    </>
  );
}
