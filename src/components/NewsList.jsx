import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNews, setArticle } from '../redux/store';

import './newslist.css';

const NewsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);
  const news = useSelector((state) => state.news.allData);

  return (
    <>
      {news.slice(0, 15).map((article, i) => (
        <div
          key={`${article.title}+${i}`}
          className="articles-container"
        >
          <img src={article.urlToImage} alt={article.title} className="img-article" />
          {article.title}
          <Link
            to="details"
            onClick={() => {
              dispatch(setArticle(article));
            }}
          >
            {' '}
            details
            {' '}

          </Link>
        </div>
      ))}

    </>
  );
};
export default NewsList;
