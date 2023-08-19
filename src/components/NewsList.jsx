import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNews, setArticle } from '../redux/store';
import Form from './Form';

const NewsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);
  const news = useSelector((state) => state.news.allData);
  const search = useSelector((state) => state.news.searchTerm);

  return (
    <>
      <Form />
      <div className="news-grid">
        {news.filter((item) => search.trim() === ''
            || item.title.toLowerCase().includes(search.toLowerCase()))
          .map((article, i) => (

            <Link
              key={`${article.title}+${i}`}
              to={`details/${article.title}`}
              onClick={() => {
                dispatch(setArticle(article));
              }}
              className="news-item"
            >

              <img src={article.urlToImage} alt={article.title} className="img-article" />
              <h6>{article.title}</h6>

            </Link>
          ))}
      </div>

    </>
  );
};
export default NewsList;
