import { useDispatch } from 'react-redux';
import { searchTerm } from '../redux/newsSlice';

import './form.css';

const Form = () => {
  const dispatch = useDispatch();
  return (
    <>
      <form>
        <input
          type="search"
          className="searchBox"
          placeholder="Search New tech"
          onChange={(e) => dispatch(searchTerm(e.target.value))}
        />
      </form>

    </>
  );
};
export default Form;
