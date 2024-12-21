import { InfinitySpin } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.wrap}>
      <InfinitySpin
        visible={true}
        width="150"
        color="#007bff"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
}
